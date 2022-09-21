import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {

  public newProjectList$: Observable<NewProject[]>

  constructor(private _projects: ProjectsService) { 
    this.newProjectList$ = new Observable();
  }

  ngOnInit(): void {
    this.newProjectList$ = this._projects.getPojects()
  }

}
