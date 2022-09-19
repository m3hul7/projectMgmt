import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewProject } from 'src/app/shared/models/new-project';
import { OverlayNewprojectPresenterService } from '../overlay-newproject-presenter/overlay-newproject-presenter.service';

@Component({
  selector: 'app-overlay-newproject-presentation',
  templateUrl: './overlay-newproject-presentation.component.html',
  styleUrls: ['./overlay-newproject-presentation.component.scss']
})
export class OverlayNewprojectPresentationComponent implements OnInit {
  public projectForm: FormGroup;
  public projectStatus: String[] = ["New", "Open", "In Progress", "Completed", "On Hold"];
  public projectCategory: String[] = ["Commercial", "Non-Profit", "Educational"];
  public projectManager: String[] = ["Mehul Patel", "Tanmay Patel"];

  @Output() emitCloseForm: EventEmitter<boolean>
  @Output() emitFormData: EventEmitter<NewProject>

  constructor(private _onps: OverlayNewprojectPresenterService) {
    this.emitCloseForm = new EventEmitter();
    this.emitFormData = new EventEmitter();
   }

  ngOnInit(): void {
    this.projectForm = this._onps.newProjectForm()
  }

  onSubmit() {
    console.log(this.projectForm.value)
    this.emitFormData.emit(this.projectForm.value)
  }

  resetForm() {
    this.projectForm.reset()
  }

  emitCancel() {
    this.emitCloseForm.emit(true);
  }
}
