import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html',
  styleUrls: ['./project-list-container.component.scss']
})
export class ProjectListContainerComponent implements OnInit {

  public allProjects: Observable<NewProject[]>

  constructor(private _ps: ProjectsService) { 
  }

  ngOnInit(): void {
    this.allProjects = this._ps.getAllPojects();
  }

  sendId(id: number) {
    this._ps.setId(id);
  }

}
