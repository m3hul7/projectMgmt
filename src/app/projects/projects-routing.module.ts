import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiscussionContainerComponent } from "./discussion-container/discussion-container.component";
import { FilesContainerComponent } from "./files-container/files-container.component";
import { OverviewContainerComponent } from "./overview-container/overview-container.component";
import { ProjectsComponent } from "./projects.component";
import { TaskManagementContainerComponent } from "./task-management-container/task-management-container.component";
import { TimelineContainerComponent } from "./timeline-container/timeline-container.component";

const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'project'
    },
    {
        path: 'project',
        component: ProjectsComponent,
        children :  [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks',
                component: TaskManagementContainerComponent
            },
            {
                path:'overview',
                component: OverviewContainerComponent
            },
            {
                path:'timeline',
                component: TimelineContainerComponent
            },
            {
                path:'files',
                component: FilesContainerComponent
            },
            {
                path:'discussion',
                component: DiscussionContainerComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}