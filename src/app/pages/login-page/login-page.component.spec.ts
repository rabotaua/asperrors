import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {LoginPageComponent} from './login-page.component'
import {ReactiveFormsModule} from '@angular/forms'
import {UserService} from '../../services/user.service'

describe('LoginPageComponent', () => {
  let component: LoginPageComponent
  let fixture: ComponentFixture<LoginPageComponent>

  beforeEach(async(() => {
    const userServiceStub = {}

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginPageComponent],
      providers: [
        {
          provide: UserService,
          useValue: userServiceStub
        }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
