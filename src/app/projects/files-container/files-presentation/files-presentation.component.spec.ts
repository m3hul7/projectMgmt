import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesPresentationComponent } from './files-presentation.component';

describe('FilesPresentationComponent', () => {
  let component: FilesPresentationComponent;
  let fixture: ComponentFixture<FilesPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
