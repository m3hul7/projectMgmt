import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormContainerComponent } from './card-form-container.component';

describe('CardFormContainerComponent', () => {
  let component: CardFormContainerComponent;
  let fixture: ComponentFixture<CardFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
