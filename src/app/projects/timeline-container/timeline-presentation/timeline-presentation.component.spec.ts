import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePresentationComponent } from './timeline-presentation.component';

describe('TimelinePresentationComponent', () => {
  let component: TimelinePresentationComponent;
  let fixture: ComponentFixture<TimelinePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
