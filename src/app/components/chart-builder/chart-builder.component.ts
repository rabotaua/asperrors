import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core'
import {BaseChartDirective} from 'ng2-charts'

@Component({
  selector: 'app-chart-builder',
  templateUrl: './chart-builder.component.html',
  styleUrls: ['./chart-builder.component.css']
})
export class ChartBuilderComponent implements OnInit, OnChanges {
  
  @Input() data: Array<any>
  @ViewChild(BaseChartDirective) chart: BaseChartDirective
  public lineChartData: Array<object>
  public lineChartLabels: Array<string>
  public lineChartLegend = false
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scaledisplay: true,
    title: {
      text: 'ASP errors',
      display: true
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 1,
          beginAtZero: true }
      }]
    }
  }
  public lineChartType = 'line'
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(41,182,246,.8)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ]
  
  constructor() { }
  
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.updateChart()
  }
  
  parseData(data: Array<any>, withSeconds: boolean = false ) {
    return data
      .sort( (a, b) =>  new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf())
      .map(i => new Date(i.timestamp).toTimeString().slice(0, withSeconds ? 8 : 5))
      .reduce((acc, minute) => Object.assign(acc, {[minute]: acc.hasOwnProperty(minute) ? acc[minute] + 1 : 1}), {})
  }
  
  updateChart() {
    this.lineChartOptions.scales.yAxes[0].ticks.max = this.getMaxValue(Object.values(this.parseData(this.data))) + 2
    
    // nesting data including seconds for short data arrays
    if (this.data.length < 10) {
      this.lineChartLabels = Object.keys(this.parseData(this.data, true))
      this.lineChartData = [
        {data: Object.values(this.parseData(this.data, true)), label: 'Total'}
      ]
    
    } else {
      this.lineChartLabels = Object.keys(this.parseData(this.data))
      this.lineChartData = [
        {data: Object.values(this.parseData(this.data)), label: 'Total'}
      ]
    }
    setTimeout(() => {
      this.chart.ngOnChanges({})
    })
  }
  
  getMaxValue(array: Array<number>) {
    return Math.max(...array)
  }

}
