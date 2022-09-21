import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewProject } from '../models/new-project';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-overlay-newproject-container',
  templateUrl: './overlay-newproject-container.component.html',
  styleUrls: ['./overlay-newproject-container.component.scss']
})
export class OverlayNewprojectContainerComponent implements OnInit {

  @Output() cancel: EventEmitter<any>;

  constructor(private _cs: CommonService) { 
    this.cancel = new EventEmitter();
  }

  ngOnInit(): void {
  }

  emittedFormData(data:NewProject) {
   this._cs.createNewProject(data).subscribe(() => {
    console.log("Success");
   });
  }

  emittedCloseForm() {
    this.cancel.emit();
  }

}
