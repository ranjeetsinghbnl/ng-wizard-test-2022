import { NgModule } from '@angular/core';
import { FinanceRoutingModule } from './finance-routing.module';
import { FormControl } from '@angular/forms';
@NgModule({
  declarations: FinanceRoutingModule.components,
  imports: [
    ...FinanceRoutingModule.modules,
    FinanceRoutingModule
  ],
  providers: FinanceRoutingModule.providers
})
export class FinanceModule { }
