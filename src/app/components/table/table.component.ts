import {Component, OnInit} from '@angular/core'

import {MainService} from '../../services/main.service'
import _ from 'lodash'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public data: Array<object> = []
  public initData: Array<any> = []
  public detailedList: Array<object> = []
  constructor(private mainService: MainService) { }
  
  ngOnInit() {
    this.mainService.loadData().subscribe(data => {
      console.log('init', data)
      this.initData = data
      this.data = data.map(item => {
        item.message = item.exceptionMessage
          .replace(/\d+/gi, '0').replace('\'[^\']+\'', '\'...\'')
          .replace('\([^\)]+\)', '(...)')
          .replace('Stored procedure .+ failed.', 'Stored procedure X failed.')
        return item
      })
  
      
      const uniqueNames = this.countOccurrence(this.data)
      this.data = this.getUniqueObject(this.data, 'message')
        .map(item => {
          uniqueNames.forEach(name => {
            if (item.message === name.message) {
              item.count = name.count
              item.uniqueIp = name.uniqueIp
              item.server = name.server
              item.site = name.site
            }
          })
          return item
        })
      console.log('result data', this.data)
    })
    
  }
  // todo combine methods / optimize ?
  // todo convert to lodash ?
  
  countOccurrence(array) {
    const obj = []
    const uniqueNames = Array.from(new Set(array.map(item => item.message)))

    
    uniqueNames.forEach(name => {
      const groupedByName = array.filter(value => value.message === name)
      console.log('API', groupedByName)
      obj.push({
        message: name,
        count: groupedByName.length,
        uniqueIp: _.uniqBy(groupedByName, 'userHostAddress').length,
        server: {
          drum: Math.round(groupedByName.filter(item => item.machinename === 'DRUM').length / groupedByName.length * 100),
          srv12: Math.round(groupedByName.filter(item => item.machinename === 'SRV12').length / groupedByName.length * 100),
          srv17: Math.round(groupedByName.filter(item => item.machinename === 'SRV17').length / groupedByName.length * 100)
        },
        site: {
          main: Math.round(groupedByName.filter(item => item.requestUrl.indexOf('/rabota.ua') > 0).length / groupedByName.length * 100),
          mobile: Math.round(groupedByName.filter(item => item.requestUrl.indexOf('/m.rabota.ua') > 0).length / groupedByName.length * 100),
          api: Math.round(groupedByName.filter(item => item.requestUrl.indexOf('/api.rabota.ua') > 0).length / groupedByName.length * 100),
          others: Math.round(groupedByName.filter(item => {
            return !(
              item.requestUrl.indexOf('/rabota.ua') > 0 ||
              item.requestUrl.indexOf('/m.rabota.ua') > 0 ||
              item.requestUrl.indexOf('/api.rabota.ua') > 0
            )
          }).length / groupedByName.length * 100)
        }
      })
    })
    return obj
  }
  
  getUniqueObject(array, field) {
    const unique = {}
    const obj = array.filter((entry) => {
      if (unique[entry[field]]) {
        return false
      }
      unique[entry[field]] = true
      return true
    })
    return obj
  }
  
 
}
