import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NewProject } from 'src/app/shared/models/new-project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _passId: BehaviorSubject<number>;
  public passId$: Observable<number>;
  private _apiLink: string;
  
  constructor(private _http: HttpClient) { 
    this._apiLink = environment.baseURL;
    this._passId = new BehaviorSubject(1);
    this.passId$ = new Observable();
    this.passId$ = this._passId.asObservable();
  }

  setId(id: number){
    this._passId.next(id);
  }

  getAllPojects():Observable<NewProject[]> {
    // const params = new HttpParams().set('delay',delay);
    return this._http.get<NewProject[]>(`${this._apiLink}/projects`);
  }

  getSpecificProject(id: number): Observable<NewProject> {
    return this._http.get<NewProject>(`${this._apiLink}/projects/${id}`);
  }

  postUpdatedProject(id: number, updatedData:any): Observable<any> {
    return this._http.patch<any>(`${this._apiLink}/projects/${id}`,updatedData)
  }
}
