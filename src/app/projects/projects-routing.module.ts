import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewContainerComponent } from "./overview-container/overview-container.component";
import { ProjectsComponent } from "./projects.component";
import { TaskManagementContainerComponent } from "./task-management-container/task-management-container.component";

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
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}