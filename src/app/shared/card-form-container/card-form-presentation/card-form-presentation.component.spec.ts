import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormPresentationComponent } from './card-form-presentation.component';

describe('CardFormPresentationComponent', () => {
  let component: CardFormPresentationComponent;
  let fixture: ComponentFixture<CardFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
