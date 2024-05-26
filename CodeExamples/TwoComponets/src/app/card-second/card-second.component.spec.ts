import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSecondComponent } from './card-second.component';

describe('CardSecondComponent', () => {
  let component: CardSecondComponent;
  let fixture: ComponentFixture<CardSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
