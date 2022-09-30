import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects/services/projects.service';
import { NewProject } from 'src/app/shared/models/new-project';

@Component({
  selector: 'app-overview-presentation',
  templateUrl: './overview-presentation.component.html',
  styleUrls: ['./overview-presentation.component.scss']
})
export class OverviewPresentationComponent implements OnInit {

  @Input() set specificProject(data: NewProject | null) {
    if(data) {
      this._projectDetails = data
    }
  }

  get specificProject(): NewProject {
    return this._projectDetails;
  }

  private _projectDetails: NewProject;

  constructor() { }

  ngOnInit(): void {
  }
}
