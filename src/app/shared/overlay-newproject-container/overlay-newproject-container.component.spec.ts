import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNewprojectContainerComponent } from './overlay-newproject-container.component';

describe('OverlayNewprojectContainerComponent', () => {
  let component: OverlayNewprojectContainerComponent;
  let fixture: ComponentFixture<OverlayNewprojectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayNewprojectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayNewprojectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
