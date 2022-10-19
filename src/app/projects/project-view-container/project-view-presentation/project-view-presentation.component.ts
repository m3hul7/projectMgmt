import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html',
  styleUrls: ['./project-view-presentation.component.scss']
})
export class ProjectViewPresentationComponent implements OnInit {

  @Input() specificProject$: Observable<NewProject>;

  constructor() { }

  ngOnInit(): void {
  }

}
