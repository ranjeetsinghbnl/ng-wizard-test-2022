import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceErrorComponent } from './finance-error.component';

describe('FinanceErrorComponent', () => {
  let component: FinanceErrorComponent;
  let fixture: ComponentFixture<FinanceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
