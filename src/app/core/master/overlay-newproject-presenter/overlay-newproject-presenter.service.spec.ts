import { TestBed } from '@angular/core/testing';

import { OverlayNewprojectPresenterService } from './overlay-newproject-presenter.service';

describe('OverlayNewprojectPresenterService', () => {
  let service: OverlayNewprojectPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayNewprojectPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
