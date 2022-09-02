import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListPresentationComponent } from './projects-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewPresentationComponent } from './projects-container/project-view-presentation/project-view-presentation.component';



@NgModule({
  declarations: [
    ProjectsContainerComponent,
    ProjectListPresentationComponent,
    ProjectViewPresentationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsContainerComponent
  ]
})
export class ProjectsModule { }
