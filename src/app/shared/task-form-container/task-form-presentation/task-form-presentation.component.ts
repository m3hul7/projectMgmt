import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  styleUrls: ['./task-form-presentation.component.scss'],
  viewProviders: [TaskFormPresenterService]
})
export class TaskFormPresentationComponent implements OnInit {

  
  public taskForm: FormGroup;
  
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings = {};
  
  @Input() formType: string;
  @Output() emitTaskFormData:EventEmitter<any>

  constructor(private _tfps: TaskFormPresenterService) { 
    this.emitTaskFormData = new EventEmitter();
    this.taskForm = this._tfps.buildForm();
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this._tfps.sendTaskForm.subscribe( data => this.emitTaskFormData.emit(data))
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    this.taskForm.value.taskFormType = this.formType;
    this.taskForm.value.taskStartDate = new Date().toLocaleDateString()
    console.log(this.taskForm.value)
    this._tfps.nextFormData(this.taskForm.value)
  }
}
