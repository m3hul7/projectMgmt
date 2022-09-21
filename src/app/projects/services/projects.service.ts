import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _apiLink: string;

  constructor(private _http: HttpClient) { 
    this._apiLink = environment.baseURL;
  }

  getPojects():Observable<NewProject[]> {
    return this._http.get<NewProject[]>(`${this._apiLink}/projects`);
  }
}
