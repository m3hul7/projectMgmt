import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NewProject } from 'src/app/shared/models/new-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.scss']
})
export class TimelineContainerComponent implements OnInit {

  private _id: number;
  public projectData$: Observable<NewProject>;

  constructor(private _ps: ProjectsService) { }

  ngOnInit(): void {
    this._ps.passId$.subscribe(id => {
      this._id = id,
      this.relevantProject(this._id)
    });
  }

  relevantProject(id: number) {
    this.projectData$ = this._ps.getSpecificProject(id)
  }

}
