import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule {
}
