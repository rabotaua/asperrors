import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import _ from 'lodash'
import {MainService} from '../../services/main.service'

@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public initData: Array<any> = []
  public statsData: Array<object> = []
  public filterData: Array<object> = []
  public currentSite = ''
  
  constructor(private mainService: MainService, private router: Router) { }
  
  // TODO: create service(?) etc...
  
  ngOnInit() {
    this.mainService.loadData().subscribe(
      data => {
        this.initData = data
        this.filterData = data
        data = data.map(item => {
          item.message = item.exceptionMessage
            .replace(/\d+/gi, '0')
            .replace(/'[^']+'/gi, '\'...\'')
            .replace(/\(.*[^)]+\)/gi, '\(...\)')
            .replace(/Stored procedure .+ failed./, 'Stored procedure X failed.')
          
          item.siteUrl = item.requestUrl
            .match(/https?:\/\/([^\/]+)/)[1]
            .replace(':443', '')
          
          return item
        })
        this.getFilteredData(data)
      },
      error => {
      if (error.status === 401) {
        localStorage.removeItem('token')
        return this.router.navigateByUrl('/login')
      }
        console.log('ERR', error)
    }
    )
  }
  
  onSiteSelect(site) {
    this.currentSite = site
    this.getFilteredData(this.initData)
  }
  
  getFilteredData(data: Array<any>) {
    
    if (this.currentSite) {
      data = data.filter(item => item.siteUrl === this.currentSite)
      this.filterData = data.filter(item => item.siteUrl === this.currentSite)
    } else {
      this.filterData = this.initData
    }
   
    this.statsData = _
      .uniqBy(this.filterData, 'message')
      .map(statsItem => this.getStatsByMessage(this.filterData, statsItem.message))
      .sort( (a, b) => b.countTotal - a.countTotal)
  }
  
  getStatsByMessage(data, message) {
    const groupedByMessage = data.filter(value => value.message === message)
    return {
      message: message,
      countTotal: groupedByMessage.length,
      countUnique: _.uniqBy(groupedByMessage, 'userHostAddress').length,
      level: groupedByMessage[0].level,
      apiList: groupedByMessage.map(item => item.userHostAddress),
      server: {
        drum: this.getPercentage(groupedByMessage, item => item.machinename === 'DRUM'),
        srv12: this.getPercentage(groupedByMessage, item => item.machinename === 'SRV12'),
        srv17: this.getPercentage(groupedByMessage, item => item.machinename === 'SRV17')
      },
      site: {
        main: this.getPercentage(groupedByMessage, item => item.requestUrl.indexOf('/rabota.ua') > 0),
        mobile: this.getPercentage(groupedByMessage, item => item.requestUrl.indexOf('/m.rabota.ua') > 0),
        api: this.getPercentage(groupedByMessage, item => item.requestUrl.indexOf('/api.rabota.ua') > 0),
        others: this.getPercentage(groupedByMessage, item => {
          return !['/rabota.ua', '/m.rabota.ua', '/api.rabota.ua'].some(mask => item.requestUrl.includes(mask))
        })
        
      }
    }
  }
  
  getPercentage(array: Array<any>, callback) {
    return Math.round(
      array.filter(callback).length / array.length * 100
    )
  }
  
  
  // alt variants to calculate percentage
  getServerPercentage(array: Array<any>, mask: string) {
    return Math.round(
      array.filter(item => item.machinename === mask).length / array.length * 100
    )
  }
  
  getSitePercentage(array, mask) {
   
    return Math.round(array.filter(item => {
      const res =  mask.some(val => item.requestUrl.includes(val))
      return mask.length > 1 ? !res : res
      }).length / array.length * 100
    )
  }

}
