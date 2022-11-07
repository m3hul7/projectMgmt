import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NewProject } from 'src/app/shared/models/new-project';
import { Observable } from 'rxjs';
import { TaskManagementPresenterService } from '../task-management-presenter/task-management-presenter.service';
import { TaskForm } from 'src/app/shared/models/task-form';



@Component({
  selector: 'app-task-management-presentation',
  templateUrl: './task-management-presentation.component.html',
  styleUrls: ['./task-management-presentation.component.scss']
})
export class TaskManagementPresentationComponent implements OnInit {

  @Output() emitTaskFormData: EventEmitter<any>;

  public newTaskFormFlag: boolean = false;
  public onProgressFormFlag: boolean = false;
  public onReviewFormFlag: boolean = false;
  public completedFormFlag: boolean = false;
  public formtype: string = '';
  public taskObj: NewProject
  public newTask: TaskForm[] = []
  public onprogress: TaskForm[] = []
  public onreview: TaskForm[] = []
  public complete: TaskForm[] = []
  public taskType: any = {
    "cdk-drop-list-0": "new",
    "cdk-drop-list-1": "onprogress",
    "cdk-drop-list-2": "onreview",
    "cdk-drop-list-3": "completed",
    
  }
  @Output() emitUpdatedData: EventEmitter<NewProject>
  
  private _projectData : NewProject ;
  public get projectData() : NewProject {
    return this._projectData;
  }
  @Input() public set projectData(v : NewProject | null) {
    if(v){
      this._projectData = v;
      this.filterTasks(this._projectData)
    }
  }
  
  constructor(private _tmps: TaskManagementPresenterService) {
    this.emitTaskFormData = new EventEmitter();
    this.emitUpdatedData = new EventEmitter();

  }

  ngOnInit(): void {
    // this.projectData.subscribe(data => {
    //   this.taskObj = data;
    //   console.log(this.taskObj)
    //   this.filterTasks(this.taskObj);
    // })
    this._tmps.objData$.subscribe(obj => this.emitUpdatedData.emit(obj))
  }

  filterTasks(obj: NewProject) {
    this.newTask = obj.taskList.filter(val => val.taskFormType === "new")
    this.onprogress = obj.taskList.filter(val => val.taskFormType === "onprogress")
    this.onreview = obj.taskList.filter(val => val.taskFormType === "onreview")
    this.complete = obj.taskList.filter(val => val.taskFormType === "completed")
  }
  openForm(flag: string) {
    switch (flag) {
      case 'newTaskFormFlag': this.newTaskFormFlag ? this.newTaskFormFlag = false : this.newTaskFormFlag = true; if (this.newTaskFormFlag) this.formtype = "new"; break;
      case 'onProgressFormFlag': this.onProgressFormFlag ? this.onProgressFormFlag = false : this.onProgressFormFlag = true; if (this.onProgressFormFlag) this.formtype = "onprogress"; break;
      case 'onReviewFormFlag': this.onReviewFormFlag ? this.onReviewFormFlag = false : this.onReviewFormFlag = true; if (this.onReviewFormFlag) this.formtype = "onreview"; break;
      case 'completedFormFlag': this.completedFormFlag ? this.completedFormFlag = false : this.completedFormFlag = true; if (this.completedFormFlag) this.formtype = "completed"; break;
    }
  }

  taskFormData(event: any) {
    this.emitTaskFormData.emit(event)
  }

  drop(event: CdkDragDrop<String[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].taskFormType = this.taskType[event.container.id]
      this._tmps.nextObjData(this.taskObj)
    }
  }
}
