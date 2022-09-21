import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';


@NgModule({
  declarations: [
    MasterComponent,
    SignInComponent,
    SignUpComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
