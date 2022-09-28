import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ProjectsComponent } from './projects.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';
import { ProjectViewPresentationComponent } from './project-view-container/project-view-presentation/project-view-presentation.component';
import { OverviewPresentationComponent } from './overview-container/overview-presentation/overview-presentation.component';
import { TaskManagementPresentationComponent } from './task-management-container/task-management-presentation/task-management-presentation.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
import { TaskManagementContainerComponent } from './task-management-container/task-management-container.component';





@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListContainerComponent,
    ProjectListPresentationComponent,
    ProjectViewContainerComponent,
    ProjectViewPresentationComponent,
    OverviewPresentationComponent,
    TaskManagementPresentationComponent,
    OverviewContainerComponent,
    TaskManagementContainerComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule
  ],
  exports: [
  ]
})
export class ProjectsModule { }
