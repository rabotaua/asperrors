// libraries
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// services
import { ApiService } from './services/api.service'
import { MainService } from './services/main.service'

// components
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthGuard } from './guards/auth.guard'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    MainService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
