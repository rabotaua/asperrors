import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component'
import {LoginPageComponent} from './pages/login-page/login-page.component'
import {AuthGuard} from './guards/auth.guard'
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
