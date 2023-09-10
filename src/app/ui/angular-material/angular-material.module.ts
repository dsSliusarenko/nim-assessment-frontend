import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AngularMaterialModule {

}
