import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-error-bundle-list',
  templateUrl: './error-bundle-list.component.html',
  styleUrls: ['./error-bundle-list.component.css']
})
export class ErrorBundleListComponent implements OnInit {
  @Input() error: object
  @Input() number: number
  public isCollapsed = true
  constructor() { }

  ngOnInit() {
  }
  
  getDate(date) {
    const dateTime = new Date(date)
    return dateTime.toLocaleDateString() + '  ' + dateTime.toLocaleTimeString()
  }
}
