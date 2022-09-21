import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NewProject } from '../models/new-project';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _apiLink: string;

  constructor(private _http: HttpClient) { 
    this._apiLink = environment.baseURL;
  }

  public createNewProject(newProject: NewProject): Observable<NewProject> {
    console.log("service cs",  newProject)
    return this._http.post<NewProject>(`${this._apiLink}/projects/`, newProject)
  }
}
