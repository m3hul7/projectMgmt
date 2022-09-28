import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectViewPresenterService } from '../project-view-presenter/project-view-presenter.service';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html',
  styleUrls: ['./project-view-presentation.component.scss']
})
export class ProjectViewPresentationComponent implements OnInit, OnChanges {

  @Input() specificProject$: Observable<NewProject>;

  constructor(private _pvps: ProjectViewPresenterService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    // this._pvps.setData(this.specificProject$);
  }
}
