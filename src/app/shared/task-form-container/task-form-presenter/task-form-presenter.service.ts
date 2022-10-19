import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TaskForm } from '../../models/task-form';

@Injectable()
export class TaskFormPresenterService {

  private _sendTaskForm: Subject<TaskForm>;
  public sendTaskForm: Observable<TaskForm>;

  constructor(private _fb: FormBuilder) { 
    this._sendTaskForm = new Subject();
    this.sendTaskForm = new Observable();
    this.sendTaskForm = this._sendTaskForm.asObservable();
  }

  buildForm(){
    return this._fb.group({
      taskId: [''],
      taskImage: [''],
      taskTag: ['',[Validators.required]],
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskFormType: ['']
    })
  }

  nextFormData(taskFormData: TaskForm) {
    return this._sendTaskForm.next(taskFormData);
  }
}
