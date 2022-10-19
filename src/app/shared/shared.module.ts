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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PageloaderComponent } from './pageloader/pageloader.component';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';



@NgModule({
  declarations: [
    OverlayNewprojectPresentationComponent,
    OverlayNewprojectContainerComponent,
    CardContainerComponent,
    CardPresentationComponent,
    PracticeComponent,
    PageloaderComponent,
    TaskFormContainerComponent,
    TaskFormPresentationComponent
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
   TaskFormContainerComponent,
   PageloaderComponent
  ]
})
export class SharedModule { }
