import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
  @Input() error
  @Input() number: number
  public stackTrace: string
  public isCollapsed = true
  public hiddenAmount = 0
  
  constructor() { }
  ngOnInit() {
  }
  
  expandStackTrace() {
    this.isCollapsed = !this.isCollapsed
    
    // todo array of objects?
    // todo optimize
    
    let flag = !this.error.stackTrace.includes(':line ')
    this.stackTrace = this.error.stackTrace
      .split('\n')
      .map(line => {
        let cls = 'normal'
        if (line.indexOf(' at System.') !== -1) {
          if (flag) {
            cls = 'lightgrey'
          } else {
            cls = 'hide'
            this.hiddenAmount++
          }
        } else if (line.indexOf(':line ') !== -1) {
          cls = 'highlight'
          flag = true
        }
        if (line.match(/\S/g)) {
          return `<span class="${cls}">${line.replace(/\ +(at )/, 'at ')}</span>`
        }
      })
      .join('')
 
  }
  
  getDate(date) {
    return new Date(date).toLocaleTimeString()
  }
  
  
  getSiteUrl(url) {
    return url.match(/https?:\/\/([^\/]+)/)[0].replace(':443', '')
  }
}
