import { Component, OnInit } from '@angular/core';
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

  constructor(private _ps: ProjectsService) { }

  ngOnInit(): void {
    this._ps.passId$.subscribe(id => this._id = id);
    this._ps.getSpecificProject(this._id).subscribe(data => this._sp = data)
  }

  taskFormData(event:any){
    event.taskId = this._sp.taskList.length;
    this._sp.taskList.push(event)
    this._ps.postUpdatedProject(this._id, this._sp).subscribe(val => console.log("success"))                                                                                                                                                                       
  }

}
