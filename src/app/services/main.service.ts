import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'

import {environment} from '../../environments/environment'
import {query} from './queryRequest'

@Injectable()
export class MainService {
  private queryString = {query: query.bigQuery}
  public token = localStorage.getItem(environment.token)


  constructor(private api: ApiService, private router: Router) { }


  login (username: string, password: string) {
    this.api.login(username, password).subscribe(data => {
      localStorage.setItem(environment.token, data)
      this.token = data
      return this.router.navigateByUrl('/dashboard')
    })
  }

  loadData() {
    return this.api.getBigQuery()
  }



}

