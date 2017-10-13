import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import _ from 'lodash'
import {MainService} from '../../services/main.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public initData: Array<any> = []
  public statsData: Array<object> = []
  
  
  constructor(private mainService: MainService, private router: Router) { }
  
  ngOnInit() {
    this.mainService.loadData().subscribe(data => {
  
      this.initData = data
 
      data = data.map(item => {
        item.message = item.exceptionMessage
          .replace(/\d+/gi, '0')
          .replace(/'[^']+'/gi, '\'...\'')
          .replace(/\([^)]+\)/gi, '\(...\)')
          .replace(/Stored procedure .+ failed./, 'Stored procedure X failed.')
        return item
      })
      this.statsData = _
        .uniqBy(data, 'message')
        .map(statsItem => this.getStatsByMessage(data, statsItem.message))
        .sort( (a, b) => b.countTotal - a.countTotal)
    }, error => {
      if (error.status === 401) {
        localStorage.removeItem('token')
        return this.router.navigateByUrl('/login')
      }
        console.log('ERR', error)
    })
  }
  
  getStatsByMessage(data, message) {
    const groupedByMessage = data.filter(value => value.message === message)
    return {
      message: message,
      countTotal: groupedByMessage.length,
      countUnique: _.uniqBy(groupedByMessage, 'userHostAddress').length,
      level: groupedByMessage[0].level,
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
