import {Component, Input, OnInit, ViewChild} from '@angular/core'
import {BaseChartDirective} from 'ng2-charts'

@Component({
  selector: 'app-chart-builder',
  templateUrl: './chart-builder.component.html',
  styleUrls: ['./chart-builder.component.css']
})
export class ChartBuilderComponent implements OnInit {
  
  @Input() data: Array<any>
  @ViewChild(BaseChartDirective) chart: BaseChartDirective
  public lineChartData: Array<object>
  public lineChartLabels: Array<string>
  
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scaledisplay: false,
    title: {
      text: 'ASP errors',
      display: true
    }
  }
  public lineChartLegend = false
  public lineChartType = 'line'
  
  constructor() { }
  
  ngOnInit() {
    this.lineChartLabels = Object.keys(this.parseData(this.data))
    this.lineChartData = [
      {data: Object.values(this.parseData(this.data)), label: 'Total'}
    ]
  }
  
  parseData(data: Array<any> ) {
    return data
      .sort( (a, b) =>  new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf())
      .map(i => new Date(i.timestamp).toTimeString().slice(0, 5))
      .reduce((acc, minute) => Object.assign(acc, {[minute]: acc.hasOwnProperty(minute) ? acc[minute] + 1 : 1}), {})
  }

}
