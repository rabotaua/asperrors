// libraries
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { ChartsModule } from 'ng2-charts/ng2-charts'

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
import { ErrorBundleComponent } from './components/error-bundle/error-bundle.component'
import { ErrorCardComponent } from './components/error-card/error-card.component'
import { ChartBuilderComponent } from './components/chart-builder/chart-builder.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    TableComponent,
    ErrorBundleComponent,
    ErrorCardComponent,
    ChartBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [
    ApiService,
    MainService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
