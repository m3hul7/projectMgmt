import { TestBed } from '@angular/core/testing';

import { OverviewPresenterService } from './overview-presenter.service';

describe('OverviewPresenterService', () => {
  let service: OverviewPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
