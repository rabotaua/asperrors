import { Injectable } from '@angular/core'
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'

import {environment} from '../../environments/environment'
import {query} from './queryRequest'

@Injectable()
export class ApiService {
  private api = environment.api.trim().replace(/\/$/, '')
  private queryApi = query.api
  private queryPayload = {query: query.bigQuery}
  public token = localStorage.getItem(environment.token)


  constructor(private http: Http, private router: Router) { }

  private url(path: string) {
    return `${this.api}${path}`
  }

  private options(bearer?: boolean) {
    const headers = new Headers()
    const params = new URLSearchParams()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    let token = localStorage.getItem(environment.token)
    if (token) {
      token = !bearer ? token : 'Bearer ' + token
      headers.append('Authorization', token)
    }
    return new RequestOptions({headers, params})
  }

  private responseHandler(response) { // todo: fix response type
    if (response.status === 401) {
      localStorage.removeItem(environment.token)
      return this.router.navigateByUrl('/login')
    }

    return response.json()
  }

  login(username: string, password: string) {
    return this.http
      .post(this.url('/token'), {username, password}, this.options())
      .map(response => this.responseHandler(response))
  }
  // Todo: use the bitch / cases are events, timeout ..?
  refreshToken() {
    return this.http
      .post(this.url('/Refresh'), {}, this.options(true))
      .map(response => this.responseHandler(response))
      .subscribe(data => {
        console.log('refresh', data)
        localStorage.setItem(environment.token, data)
        this.token = data
      })
  }

  getBigQuery() {
    return this.http
      .post(this.queryApi, this.queryPayload, this.options(true))
      .map(response => this.responseHandler(response))
  }



}
