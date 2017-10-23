import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-site-select',
  templateUrl: './site-select.component.html',
  styleUrls: ['./site-select.component.css']
})
export class SiteSelectComponent implements OnInit {
  @Input() data: Array<any> = []
  @Output() chosenSite = new EventEmitter()
  
  public urlList: Array<any> = []
  constructor() { }

  ngOnInit() {
    this.urlList = this.getSites(this.data)
  }
  
  onSiteSelect(value) {
    this.chosenSite.emit(value)
  }
  
  getSites(data) {
    const urls = data.map(item => item.siteUrl)
    urls.push('All')
    return Array.from(new Set(urls))
  }
}
