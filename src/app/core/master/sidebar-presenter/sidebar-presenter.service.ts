import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { OverlayNewprojectPresentationComponent } from '../overlay-newproject-presentation/overlay-newproject-presentation.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarPresenterService {

  constructor(private _overlay: Overlay) { }

  displayOverlay(){
    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().right().centerVertically(),
    });
    const newProjectPortal = new ComponentPortal(OverlayNewprojectPresentationComponent)
    const componentRef =  overlayRef.attach(newProjectPortal);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })
    componentRef.instance.emitCloseForm.subscribe((data) => {
      if(data){
        overlayRef.detach();
      }
    })
  }
}
