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
  
}
