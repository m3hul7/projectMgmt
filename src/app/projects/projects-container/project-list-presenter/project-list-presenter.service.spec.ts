import { TestBed } from '@angular/core/testing';

import { ProjectListPresenterService } from './project-list-presenter.service';

describe('ProjectListPresenterService', () => {
  let service: ProjectListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
