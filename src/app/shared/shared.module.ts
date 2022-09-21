import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { OverlayNewprojectContainerComponent } from './overlay-newproject-container/overlay-newproject-container.component';
import { OverlayNewprojectPresentationComponent } from './overlay-newproject-container/overlay-newproject-presentation/overlay-newproject-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OverlayNewprojectPresentationComponent,
    OverlayNewprojectContainerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
