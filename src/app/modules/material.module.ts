import {NgModule} from '@angular/core'

// import & export each material feature/component below
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule
  ],
})
export class AppMaterialModule { }
