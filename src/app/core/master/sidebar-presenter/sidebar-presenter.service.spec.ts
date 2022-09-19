import { TestBed } from '@angular/core/testing';

import { SidebarPresenterService } from './sidebar-presenter.service';

describe('SidebarPresenterService', () => {
  let service: SidebarPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
