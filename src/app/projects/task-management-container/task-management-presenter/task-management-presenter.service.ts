import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementPresenterService {

  private objData: Subject<NewProject>
  public objData$: Observable<NewProject>
  constructor() { 
    this.objData = new Subject();
    this.objData$ = new Observable();
    this.objData$  = this.objData.asObservable()
  }
  nextObjData(obj: NewProject) {
    this.objData.next(obj)
  }
}
