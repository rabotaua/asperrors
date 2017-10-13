import {Component} from '@angular/core'
import {MainService} from '../../services/main.service'
import {ApiService} from '../../services/api.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private api: ApiService) {
      this.loginForm = fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
  }

  submit() {
    if (!this.loginForm.valid) {
      return
    }
    const {username, password} = this.loginForm.value
    this.mainService.login(username, password)
  }

}
