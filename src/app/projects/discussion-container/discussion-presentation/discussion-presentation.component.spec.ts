import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPresentationComponent } from './discussion-presentation.component';

describe('DiscussionPresentationComponent', () => {
  let component: DiscussionPresentationComponent;
  let fixture: ComponentFixture<DiscussionPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
