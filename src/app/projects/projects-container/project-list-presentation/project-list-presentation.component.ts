import { Component, Input, OnInit } from '@angular/core';
import { NewProject } from 'src/app/shared/models/new-project';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  styleUrls: ['./project-list-presentation.component.scss']
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() public set newProjectList(data: NewProject[] | null) {
    if(data) {
      console.log(data);
      this._newProjectList = data;
    }
  }
  public get newProjectList(): NewProject[] {
    return this._newProjectList;
  }

  private _newProjectList: NewProject[];

  constructor() { }

  ngOnInit(): void {
  }

}
