import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNewprojectPresentationComponent } from './overlay-newproject-presentation.component';

describe('OverlayNewprojectPresentationComponent', () => {
  let component: OverlayNewprojectPresentationComponent;
  let fixture: ComponentFixture<OverlayNewprojectPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayNewprojectPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayNewprojectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
