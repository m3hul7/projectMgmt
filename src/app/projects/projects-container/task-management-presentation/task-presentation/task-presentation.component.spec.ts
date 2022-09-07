import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPresentationComponent } from './task-presentation.component';

describe('TaskPresentationComponent', () => {
  let component: TaskPresentationComponent;
  let fixture: ComponentFixture<TaskPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
