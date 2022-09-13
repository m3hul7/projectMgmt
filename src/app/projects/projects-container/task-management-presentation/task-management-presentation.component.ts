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

  drop(event: CdkDragDrop<String[]>| any) {
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
