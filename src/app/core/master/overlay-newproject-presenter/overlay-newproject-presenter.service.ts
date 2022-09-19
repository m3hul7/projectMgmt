import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OverlayNewprojectPresenterService {

  constructor(private _fb: FormBuilder) { }

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
    })
  }
}
