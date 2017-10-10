import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
  @Input() item: any
  @Input() data: Array<any>
  @Input() number: number
  public detailedList: Array<any> = []
  public isCollapsed = true
  constructor() { }

  ngOnInit() {
  
  }
  viewList(message: string) {
    this.detailedList = this.data.filter(item => item.message === message)
    this.isCollapsed = !this.isCollapsed
    // console.log('card error', this.error)
  }
  // getSiteSource(error) {
  //   if (error.requestUrl.indexOf('/rabota.ua') > 0) {
  //     return 'rabota.ua'
  //   } else if (error.requestUrl.indexOf('/m.rabota.ua') > 0) {
  //     return 'm.rabota.ua'
  //   } else if (error.requestUrl.indexOf('/api.rabota.ua') > 0) {
  //     return 'api.rabota.ua'
  //   } else {return ''}
  // }
}
