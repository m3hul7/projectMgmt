import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewPresentationComponent } from './project-view-presentation.component';

describe('ProjectViewPresentationComponent', () => {
  let component: ProjectViewPresentationComponent;
  let fixture: ComponentFixture<ProjectViewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectViewPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
