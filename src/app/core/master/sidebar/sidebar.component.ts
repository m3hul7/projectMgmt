import { Component, OnInit } from '@angular/core';
import { OverlayNewProjectService } from 'src/app/shared/services/overlay-new-project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private overlayService: OverlayNewProjectService) { }

  ngOnInit(): void {
  }

  openOverlay(){
    this.overlayService.displayOverlay()
  }
}