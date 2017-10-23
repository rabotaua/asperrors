import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-error-bundle',
  templateUrl: './error-bundle.component.html',
  styleUrls: ['./error-bundle.component.scss']
})
export class ErrorBundleComponent implements OnInit {
  @Input() item: any
  @Input() data: Array<any>
  public detailedList: Array<any> = []
  public isCollapsed = true
  public showHistogram = false
  public Object = Object
  constructor() { }

  ngOnInit() {
    this.item.apiList = this.mostFrequentApis(this.item.apiList, 30, 5)
    
    const sites = this.data.map(item => item)
  }
  
  viewList(message: string) {
    this.detailedList = this.data
      .filter(item => item.message === message)
      .sort( (a, b) => {
        return new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
      })
    
    this.isCollapsed = !this.isCollapsed
    this.showHistogram = !this.showHistogram
  }
  
  mostFrequentApis(apiList: Array<string>, percentage: number = 0, amountToShow: number = 100) {
    const frequency = apiList
      .reduce(
        (acc, api) => Object.assign(acc, {[api]: acc.hasOwnProperty(api) ? acc[api] + 1 : 1}),
        {}
      )
    return Object.entries(frequency)
      .filter(api => api[1] > percentage / 100 * this.item.countTotal)
      .sort((a, b) =>  +b[1] - +a[1])
      .slice(0, amountToShow)
  }
  
}
