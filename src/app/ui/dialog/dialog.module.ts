import {NgModule} from "@angular/core";
import {DialogComponent} from "./dialog.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {IconsModule} from "../icons/icons.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule {

}
