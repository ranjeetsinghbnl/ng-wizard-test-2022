import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LocalService } from 'src/app/services/local.service';
import { PFinanceService } from '../../services/p-finance.service';

import { FinanceDetailsComponent } from './finance-details.component';

describe('FinanceDetailsComponent', () => {
  let component: FinanceDetailsComponent;
  let fixture: ComponentFixture<FinanceDetailsComponent>;
  let financeService: PFinanceService =  new PFinanceService();
  let localStore: LocalService = new LocalService();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ FinanceDetailsComponent ],
      providers: [
        { provide: PFinanceService, useValue: financeService },
        { provide: LocalService, useValue: localStore }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all premium plans', () => {
    fixture = TestBed.createComponent(FinanceDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const li = compiled.querySelectorAll('li');
    expect(li.length).toBe(3)
  });

  it('form must be invalid when required fields are not filled', () => {
    expect(component.premiumForm.valid).toBeFalsy();
  });

  it('form must be valid when required values are filled', () => {
    expect(component.premiumForm.valid).toBeFalsy();
    component.premiumForm.controls.userName.setValue('John Doe');
    component.premiumForm.controls.userAge.setValue(10);
    component.premiumForm.controls.plan.setValue(1);
    expect(component.premiumForm.valid).toBeTruthy();
  });

  it('should calculate the premium correctly - HKD', () => {
    fixture = TestBed.createComponent(FinanceDetailsComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hs = compiled.querySelectorAll('h1');

    expect(hs[1].textContent).toContain('Your premium is: 500HKD')
  });

  it('should calculate the premium correctly - USD', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let countryInput: HTMLSelectElement = compiled.querySelector('select')!;
    countryInput.value = 'USD';
    countryInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const hs = compiled.querySelectorAll('h1');
    expect(hs[1].textContent).toContain('Your premium is: 1000USD')
  });

  it('should calculate the premium correctly - AUD', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let countryInput: HTMLSelectElement = compiled.querySelector('select')!;
    countryInput.value = 'AUD';
    countryInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const hs = compiled.querySelectorAll('h1');
    expect(hs[1].textContent).toContain('Your premium is: 1500AUD')
  });

  it('should calculate the premium correctly - AUD and Age', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let countryInput: HTMLSelectElement = compiled.querySelector('select')!;
    countryInput.value = 'AUD';
    countryInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    let ageInput: NodeListOf<HTMLInputElement> = compiled.querySelectorAll('input');
    ageInput[1].value = '40';
    ageInput[1].dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const hs = compiled.querySelectorAll('h1');
    expect(hs[1].textContent).toContain('Your premium is: 1200AUD')
  });

  it('should calculate the premium correctly - AUD and Age and Safe Plan', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let countryInput: HTMLSelectElement = compiled.querySelector('select')!;
    countryInput.value = 'AUD';
    countryInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    let ageInput: NodeListOf<HTMLInputElement> = compiled.querySelectorAll('input');
    ageInput[1].value = '40';
    ageInput[1].dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let planInput:DebugElement[] = fixture.debugElement.queryAll(By.css('input[name="plan"]'));
    planInput[1].triggerEventHandler('change', { target: planInput[1].nativeElement });
    fixture.detectChanges();

    const hs = compiled.querySelectorAll('h1');
    expect(hs[1].textContent).toContain('Your premium is: 1800AUD')
  });

  it('should calculate the premium correctly - AUD and Age and Super Safe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    let countryInput: HTMLSelectElement = compiled.querySelector('select')!;
    countryInput.value = 'AUD';
    countryInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    let ageInput: NodeListOf<HTMLInputElement> = compiled.querySelectorAll('input');
    ageInput[1].value = '40';
    ageInput[1].dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let planInput:DebugElement[] = fixture.debugElement.queryAll(By.css('input[name="plan"]'));
    planInput[2].triggerEventHandler('change', { target: planInput[1].nativeElement });
    fixture.detectChanges();

    const hs = compiled.querySelectorAll('h1');
    expect(hs[1].textContent).toContain('Your premium is: 2100AUD')
  });

  it('calculateTotalPremium() - called', () => {
    spyOn(component, 'calculateTotalPremium');
    component.calculateTotalPremium();
    expect(component.calculateTotalPremium).toHaveBeenCalled();
  })

  it('calculatePlanPremium() - called', () => {
    spyOn(component, 'calculatePlanPremium');
    component.calculatePlanPremium(2);
    expect(component.calculatePlanPremium).toHaveBeenCalled();
    expect(component.calculatePlanPremium).toHaveBeenCalledWith(2);
  })
});
