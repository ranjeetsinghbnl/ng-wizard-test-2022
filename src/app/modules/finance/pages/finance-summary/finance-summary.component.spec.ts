import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumDetails } from '../../../../configs/mock-data';

import { FinanceSummaryComponent } from './finance-summary.component';


describe('FinanceSummaryComponent', () => {
  let component: FinanceSummaryComponent;
  let fixture: ComponentFixture<FinanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display premium information', () => {
    const component = fixture.componentInstance;
    component.premiumDetails = PremiumDetails

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Joh Doe');
    expect(compiled.querySelector('li')?.textContent).toContain('Name: Joh Doe');
    expect(compiled.querySelectorAll('li').length).toBe(5)
  });
});
