import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNewProjectComponent } from './overlay-new-project.component';

describe('OverlayNewProjectComponent', () => {
  let component: OverlayNewProjectComponent;
  let fixture: ComponentFixture<OverlayNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayNewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
