import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPresentationComponent } from './overview-presentation.component';

describe('OverviewPresentationComponent', () => {
  let component: OverviewPresentationComponent;
  let fixture: ComponentFixture<OverviewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
