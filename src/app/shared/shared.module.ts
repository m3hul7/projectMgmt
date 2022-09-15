import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayNewProjectComponent } from './overlay-new-project/overlay-new-project.component';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    OverlayNewProjectComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class SharedModule { }
