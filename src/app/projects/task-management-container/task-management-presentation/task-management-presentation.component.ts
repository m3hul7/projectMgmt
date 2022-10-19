import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



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

  constructor() {
    this.emitTaskFormData = new EventEmitter();
  }

  ngOnInit(): void {
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

  newtask = [
    {
      tag: "web app Design",
      title: "hello my new friend 1",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my new friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my new friend 3",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    }
  ];

  progress = [
    {
      tag: "web app Design 1",
      title: "hello my on progress friend 1",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design 2",
      title: "hello my on progress friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design 2",
      title: "hello my on progress friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    }
  ]

  review = [
    {
      tag: "web app Design",
      title: "hello my on review friend 1",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my on review friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my on review friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    }
  ];

  complete = [
    {
      tag: "web app Design",
      title: "hello my finished friend 1",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my finished friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    },
    {
      tag: "web app Design",
      title: "hello my finished friend 2",
      description: "something here osome quick example text to build on on the card title and make up the bulk of the card's"
    }
  ];

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
    }
  }
}
