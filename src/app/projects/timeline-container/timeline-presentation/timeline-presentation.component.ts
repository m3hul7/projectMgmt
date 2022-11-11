import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-presentation',
  templateUrl: './timeline-presentation.component.html',
  styleUrls: ['./timeline-presentation.component.scss']
})
export class TimelinePresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public prevTask = new Date('11/01/2022')
  public latestTask  = new Date('12/25/2022')

  

}
