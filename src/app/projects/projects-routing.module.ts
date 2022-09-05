import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsContainerComponent } from "./projects-container/projects-container.component";
import { TaskManagementPresentationComponent } from "./projects-container/task-management-presentation/task-management-presentation.component";

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
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}