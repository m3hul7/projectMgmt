import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidebarPresentationComponent } from './master/sidebar-presentation/sidebar-presentation.component';
import { OverlayNewprojectPresentationComponent } from './master/overlay-newproject-presentation/overlay-newproject-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterComponent,
    SignInComponent,
    SignUpComponent,
    SidebarPresentationComponent,
    OverlayNewprojectPresentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
