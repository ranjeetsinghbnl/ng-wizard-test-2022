import { Location,CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FinanceDetailsComponent } from '../finance-details/finance-details.component';

import { GetStartComponent } from './get-start.component';

describe('GetStartComponent', () => {
  let component: GetStartComponent;
  let fixture: ComponentFixture<GetStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'choose-plan', component: FinanceDetailsComponent }
         ])
      ],
      declarations: [ GetStartComponent,FinanceDetailsComponent ],
      providers:[Location]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GetStartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello There!');
  });

  it('should have get start button', () => {
    const fixture = TestBed.createComponent(GetStartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Start');
  });
});
