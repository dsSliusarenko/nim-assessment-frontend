import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {OrderComponent} from './order.component';
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";
import {IconsModule} from "../ui/icons/icons.module";

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    NgOptimizedImage,
    IconsModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule {
}
