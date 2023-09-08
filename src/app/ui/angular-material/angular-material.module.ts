import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ]
})
export class AngularMaterialModule {

}
