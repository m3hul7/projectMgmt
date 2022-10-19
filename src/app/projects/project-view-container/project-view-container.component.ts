import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { PageloaderService } from 'src/app/shared/services/pageloader.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-view-container',
  templateUrl: './project-view-container.component.html',
  styleUrls: ['./project-view-container.component.scss']
})
export class ProjectViewContainerComponent implements OnInit{

  public specificProject$: Observable<NewProject>;

  constructor(private _ps: ProjectsService) { }

  ngOnInit(): void {
    this._ps.passId$.subscribe(id => this.relevantProject(id));
  }

  relevantProject(id: number) {
    this.specificProject$ = this._ps.getSpecificProject(id);    
  }

}
