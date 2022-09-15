import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { OverlayNewProjectComponent } from '../overlay-new-project/overlay-new-project.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayNewProjectService {

  constructor(private overlay: Overlay) { }

  displayOverlay(){
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().right().centerVertically().height("100%"),
    });
    const newProjectPortal = new ComponentPortal(OverlayNewProjectComponent)
    const componentRef =  overlayRef.attach(newProjectPortal);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    }
    )
  }
}
