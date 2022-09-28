import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from '../shared/models/new-project';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
