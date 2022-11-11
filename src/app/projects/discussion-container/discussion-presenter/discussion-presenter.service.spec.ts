import { TestBed } from '@angular/core/testing';

import { DiscussionPresenterService } from './discussion-presenter.service';

describe('DiscussionPresenterService', () => {
  let service: DiscussionPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscussionPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
