import { TestBed } from '@angular/core/testing';

import { TaskManagementPresenterService } from './task-management-presenter.service';

describe('TaskManagementPresenterService', () => {
  let service: TaskManagementPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagementPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
