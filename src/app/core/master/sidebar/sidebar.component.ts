import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { OverlayNewprojectContainerComponent } from 'src/app/shared/overlay-newproject-container/overlay-newproject-container.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _overlay: Overlay) { }

  ngOnInit(): void {
  }

  displayOverlay(){
    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().right().centerVertically(),
    });
    const newProjectPortal = new ComponentPortal(OverlayNewprojectContainerComponent)
    const componentRef =  overlayRef.attach(newProjectPortal);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })
    componentRef.instance.cancel.subscribe(() => {
      overlayRef.detach();
    })
  }

}
