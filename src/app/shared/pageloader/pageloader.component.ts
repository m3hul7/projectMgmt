import { Component, OnInit } from '@angular/core';
import { PageloaderService } from '../services/pageloader.service';

@Component({
  selector: 'app-pageloader',
  templateUrl: './pageloader.component.html',
  styleUrls: ['./pageloader.component.scss']
})
export class PageloaderComponent implements OnInit {

  public isVisible: boolean = false

  constructor(private _pls: PageloaderService) { }

  ngOnInit(): void {
    this._pls.isLoading.subscribe({
      next: (x) => this.isVisible = x,
      error: (e) => console.log(e),
    })
  }

}
