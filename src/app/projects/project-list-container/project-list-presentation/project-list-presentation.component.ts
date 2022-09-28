import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewProject } from 'src/app/shared/models/new-project';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  styleUrls: ['./project-list-presentation.component.scss']
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() set allProjects(value: NewProject[] | null) {
    if(value) {
      this._allProjects = value;
    }
  }

  get allProjects(): NewProject[] {
    return this._allProjects;
  }

  @Output() emitId: EventEmitter<number>;

  private _allProjects: NewProject[];
 
  constructor() { 
    this.emitId = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public sendId(id: number) {
    this.emitId.emit(id);
  }

}
