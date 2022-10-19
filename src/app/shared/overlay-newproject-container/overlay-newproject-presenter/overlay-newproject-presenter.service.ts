import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { NewProject } from '../../models/new-project';

@Injectable({
  providedIn: 'root'
})
export class OverlayNewprojectPresenterService {

  private overlayNewProjectData: Subject<NewProject>;
  public overlayNewProjectData$: Observable<NewProject>;

  constructor(private _fb: FormBuilder) { 
    this.overlayNewProjectData = new Subject();
    this.overlayNewProjectData$ = new Observable();
    this.overlayNewProjectData$ = this.overlayNewProjectData.asObservable();
  }

  newProjectForm(){
    return this._fb.group({
      projectName: ['',[Validators.required]],
      projectDescription: ['',[Validators.required]],
      projectManager: ['', Validators.required],
      projectStartDate: ['', Validators.required],
      projectEstimatedEndDate: ['', Validators.required],
      category: ['', Validators.required],
      billingType: ['', Validators.required],
      projectStatus: ['', Validators.required],
      taskList: [[]],
    })
  }

  newProjectFormData(overlayNewProjectData: FormGroup) {
    this.overlayNewProjectData.next(overlayNewProjectData.value)
  }
}
