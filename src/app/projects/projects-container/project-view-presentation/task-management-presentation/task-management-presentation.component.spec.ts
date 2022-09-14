import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementPresentationComponent } from './task-management-presentation.component';

describe('TaskManagementPresentationComponent', () => {
  let component: TaskManagementPresentationComponent;
  let fixture: ComponentFixture<TaskManagementPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagementPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagementPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
