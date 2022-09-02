import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListPresentationComponent } from './project-list-presentation.component';

describe('ProjectListPresentationComponent', () => {
  let component: ProjectListPresentationComponent;
  let fixture: ComponentFixture<ProjectListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
