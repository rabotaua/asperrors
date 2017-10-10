// libraries
import { BrowserModule } from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

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
import { TableComponent } from './components/table/table.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import {AppMaterialModule} from './modules/material.module'
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { ErrorBundleListComponent } from './components/error-bundle-list/error-bundle-list.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    TableComponent,
    ErrorCardComponent,
    ErrorBundleListComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiService,
    MainService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
