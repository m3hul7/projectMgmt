import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionContainerComponent } from './discussion-container.component';

describe('DiscussionContainerComponent', () => {
  let component: DiscussionContainerComponent;
  let fixture: ComponentFixture<DiscussionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
