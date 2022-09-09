import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-management-presentation',
  templateUrl: './task-management-presentation.component.html',
  styleUrls: ['./task-management-presentation.component.scss']
})
export class TaskManagementPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  complete = ['Sit', 'teeth', 'shower', 'e-mail', 'dog'];

  drop(event: CdkDragDrop<String[]>) {
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
