import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent implements OnInit {

  public specificProject$: Observable<NewProject>;
  
  constructor(private _ps: ProjectsService) { }

  ngOnInit(): void {
    this._ps.passId$.subscribe(id => this.relevantProject(id));
  }

  relevantProject(id: number) {
    this.specificProject$ = this._ps.getSpecificProject(id);
  }

}
