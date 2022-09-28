import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementContainerComponent } from './task-management-container.component';

describe('TaskManagementContainerComponent', () => {
  let component: TaskManagementContainerComponent;
  let fixture: ComponentFixture<TaskManagementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagementContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
