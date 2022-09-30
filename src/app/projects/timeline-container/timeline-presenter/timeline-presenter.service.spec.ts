import { TestBed } from '@angular/core/testing';

import { TimelinePresenterService } from './timeline-presenter.service';

describe('TimelinePresenterService', () => {
  let service: TimelinePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelinePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
