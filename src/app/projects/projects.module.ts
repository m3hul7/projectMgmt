import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListPresentationComponent } from './projects-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewPresentationComponent } from './projects-container/project-view-presentation/project-view-presentation.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TaskManagementPresentationComponent } from './projects-container/task-management-presentation/task-management-presentation.component';
import { TaskPresentationComponent } from './projects-container/task-management-presentation/task-presentation/task-presentation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    ProjectsContainerComponent,
    ProjectListPresentationComponent,
    ProjectViewPresentationComponent,
    TaskManagementPresentationComponent,
    TaskPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule
  ],
  exports: [
    ProjectsContainerComponent
  ]
})
export class ProjectsModule { }
