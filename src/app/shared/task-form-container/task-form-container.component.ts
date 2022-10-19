import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html',
  styleUrls: ['./task-form-container.component.scss']
})
export class TaskFormContainerComponent implements OnInit {

  @Input() formType: string;
  @Output() emitTaskFormData: EventEmitter<any>;

  constructor() { 
    this.emitTaskFormData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  taskFormData(event:any) {
    this.emitTaskFormData.emit(event)
  }

}
