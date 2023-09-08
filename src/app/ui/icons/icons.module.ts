import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule
  ]
})
export class IconsModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'add',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-add.svg'),
    );
    matIconRegistry.addSvgIcon(
      'remove',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-remove.svg'),
    );
  }
}
