import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NewProject } from 'src/app/shared/models/new-project';
import { Observable } from 'rxjs';



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
  public taskList: any[] = []
  public newTask: any[] = []
  public progress: any[] = []
  public review: any[] = []
  public complete: any[] = []
  @Input() public projectData: Observable<NewProject>;
  
  constructor() {
    this.emitTaskFormData = new EventEmitter();
  }

  ngOnInit(): void {
    this.projectData.subscribe(data => {
      this.newTask = data.taskList.filter(val => val.taskFormType === "New")
      this.progress = data.taskList.filter(val => val.taskFormType === "On Progress")
      this.review = data.taskList.filter(val => val.taskFormType === "On Review")
      this.complete = data.taskList.filter(val => val.taskFormType === "Completed")
    })
  }

  openForm(flag: string) {
    switch (flag) {
      case 'newTaskFormFlag': this.newTaskFormFlag ? this.newTaskFormFlag = false : this.newTaskFormFlag = true; if (this.newTaskFormFlag) this.formtype = "New"; break;
      case 'onProgressFormFlag': this.onProgressFormFlag ? this.onProgressFormFlag = false : this.onProgressFormFlag = true; if (this.onProgressFormFlag) this.formtype = "On Progress"; break;
      case 'onReviewFormFlag': this.onReviewFormFlag ? this.onReviewFormFlag = false : this.onReviewFormFlag = true; if (this.onReviewFormFlag) this.formtype = "On Review"; break;
      case 'completedFormFlag': this.completedFormFlag ? this.completedFormFlag = false : this.completedFormFlag = true; if (this.completedFormFlag) this.formtype = "Completed"; break;
    }
  }

  taskFormData(event: any) {
    this.emitTaskFormData.emit(event)
  }

  drop(event: CdkDragDrop<String[]> | any) {
    if (event.previousContainer === event.container) {
      console.log("in array");
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].taskFormType
      console.log(event.container)
    }
  }
}
