import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';

import { SharedModule } from '../shared/shared.module';
import { FilesContainerComponent } from './files-container/files-container.component';
import { FilesPresentationComponent } from './files-container/files-presentation/files-presentation.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
import { OverviewPresentationComponent } from './overview-container/overview-presentation/overview-presentation.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';
import { ProjectViewPresentationComponent } from './project-view-container/project-view-presentation/project-view-presentation.component';
import { ProjectsComponent } from './projects.component';
import { TaskManagementContainerComponent } from './task-management-container/task-management-container.component';
import { TaskManagementPresentationComponent } from './task-management-container/task-management-presentation/task-management-presentation.component';
import { TimelineContainerComponent } from './timeline-container/timeline-container.component';
import { TimelinePresentationComponent } from './timeline-container/timeline-presentation/timeline-presentation.component';
import { DiscussionContainerComponent } from './discussion-container/discussion-container.component';
import { DiscussionPresentationComponent } from './discussion-container/discussion-presentation/discussion-presentation.component';




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
    TaskManagementContainerComponent,
    TimelineContainerComponent,
    FilesContainerComponent,
    TimelinePresentationComponent,
    FilesPresentationComponent,
    DiscussionContainerComponent,
    DiscussionPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule,
    SharedModule,
  ]
})
export class ProjectsModule { }
