import { TestBed } from '@angular/core/testing';

import { FilesPresenterService } from './files-presenter.service';

describe('FilesPresenterService', () => {
  let service: FilesPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
