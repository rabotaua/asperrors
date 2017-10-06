import { Component, OnInit } from '@angular/core'
import {MainService} from '../../services/main.service'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  public querydata: Array<object>
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  loadData() {
    this.mainService.loadData().subscribe(data => {
      this.querydata = data
      console.log(data)
    })
  }
}
