import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { OverlayNewprojectContainerComponent } from './overlay-newproject-container/overlay-newproject-container.component';
import { OverlayNewprojectPresentationComponent } from './overlay-newproject-container/overlay-newproject-presentation/overlay-newproject-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardPresentationComponent } from './card-container/card-presentation/card-presentation.component';
import { PracticeComponent } from './practice/practice.component';
import { CardFormContainerComponent } from './card-form-container/card-form-container.component';
import { CardFormPresentationComponent } from './card-form-container/card-form-presentation/card-form-presentation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    OverlayNewprojectPresentationComponent,
    OverlayNewprojectContainerComponent,
    CardContainerComponent,
    CardPresentationComponent,
    PracticeComponent,
    CardFormContainerComponent,
    CardFormPresentationComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
   CardContainerComponent,
   CardFormContainerComponent
  ]
})
export class SharedModule { }
