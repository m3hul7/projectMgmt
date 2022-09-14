import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewPresentationComponent } from "./projects-container/project-view-presentation/overview-presentation/overview-presentation.component";
import { ProjectsContainerComponent } from "./projects-container/projects-container.component";
import { TaskManagementPresentationComponent } from "./projects-container/project-view-presentation/task-management-presentation/task-management-presentation.component";

const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'project'
    },
    {
        path: 'project',
        component: ProjectsContainerComponent,
        children :  [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks',
                component: TaskManagementPresentationComponent
            },
            {
                path:'overview',
                component: OverviewPresentationComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}