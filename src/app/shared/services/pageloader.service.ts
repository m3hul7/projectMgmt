import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageloaderService {

  private _loader: BehaviorSubject<boolean>;

  constructor() { 
    this._loader = new BehaviorSubject(false);
  }

  get isLoading() {
    return this._loader.asObservable();
  }

  showLoader() {
    this._loader.next(true);
  }

  hideLoader() {
    this._loader.next(false);
  }
}
