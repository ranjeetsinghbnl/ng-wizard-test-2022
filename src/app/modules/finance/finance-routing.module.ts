import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { GetStartComponent } from './pages/get-start/get-start.component';
import { FinanceDetailsComponent } from './pages/finance-details/finance-details.component';
import { FinanceSummaryComponent } from './pages/finance-summary/finance-summary.component';
import { FinanceErrorComponent } from './pages/finance-error/finance-error.component';

// Services
import { PFinanceService } from './services/p-finance.service';


const routes: Routes = [
  { 
    path: '',   
    redirectTo: '/get-started', 
    pathMatch: 'full' 
  },
  {
    path: 'get-started',
    component: GetStartComponent,
    title: 'Get Started'
  },
  {
    path: 'choose-plan',
    component: FinanceDetailsComponent,
    title: 'Choose Plan'
  },
  {
    path: 'summary',
    component: FinanceSummaryComponent,
    title: 'Purchase'
  },
  {
    path: 'error',
    component: FinanceErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {
  static components = [
    GetStartComponent,
    FinanceDetailsComponent,
    FinanceSummaryComponent,
    FinanceErrorComponent,
  ]

  static modules = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]

  static providers = [
    PFinanceService
  ]
}
