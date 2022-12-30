import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-task-management-container',
  templateUrl: './task-management-container.component.html',
  styleUrls: ['./task-management-container.component.scss']
})
export class TaskManagementContainerComponent implements OnInit {

  private _id: number;
  private _sp: NewProject;
  public projectData$: Observable<NewProject>;

  constructor(private _ps: ProjectsService) { }

  ngOnInit(): void {
    this._ps.passId$.subscribe(id => {
      this._id = id,
      console.log(this._id)
      this.relevantProject(this._id)
    });
    this.projectData$ = this._ps.getSpecificProject(this._id)
  }
  relevantProject(id: number) {
    this.projectData$ = this._ps.getSpecificProject(id)
    this._ps.getSpecificProject(this._id).subscribe(val => this._sp = val)
  }

  taskFormData(event:any){
    event.taskId = this._sp.taskList.length;
    this._sp.taskList.push(event)
    this._ps.postUpdatedProject(this._id, this._sp).subscribe(val => console.log("success"))                                                                                                                                                                       
  }
  updatedData(event:any) {
    // console.log(event)
    this._ps.postUpdatedProject(this._id,event).subscribe(val => console.log("updated"))
  }

}
