import { Component, OnInit } from '@angular/core';
import { SidebarPresenterService } from '../sidebar-presenter/sidebar-presenter.service';

@Component({
  selector: 'app-sidebar-presentation',
  templateUrl: './sidebar-presentation.component.html',
  styleUrls: ['./sidebar-presentation.component.scss']
})
export class SidebarPresentationComponent implements OnInit {

  constructor(private _sps: SidebarPresenterService) { }

  ngOnInit(): void {
  }

  openOverlay(){
    this._sps.displayOverlay();
  }

}
