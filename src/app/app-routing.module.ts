import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/master/master.component';
import { SignInComponent } from './core/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
