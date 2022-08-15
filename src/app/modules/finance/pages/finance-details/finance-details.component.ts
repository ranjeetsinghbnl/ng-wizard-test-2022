import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base/base.component';
import { PFinanceService } from '../../services/p-finance.service';
import { Countries, PKEY, PremiumPlans, UserPremiumDetail } from '../../../../configs/config';
import { Router } from '@angular/router';
import { RouterLinks } from 'src/app/configs/routes';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-finance-details',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.scss']
})
export class FinanceDetailsComponent extends BaseComponent implements OnInit {

  premiumForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userAge: new FormControl(50,[Validators.required, Validators.min(1)]),
    country:  new FormControl('HKD',Validators.required),
    plan:  new FormControl(1),
  });

  premiumPlans = PremiumPlans;
  countries = Countries
  constructor(
    private financeService: PFinanceService,
    private _router: Router,
    private localStore: LocalService
  ) { 
    super();
  }

  get formControl(){
    return this.premiumForm.controls;
  }

  ngOnInit(): void {
    try {
      const details = this.localStore.getData('premium')
      if(details) {
        const premiumDetails:UserPremiumDetail = JSON.parse(details);
        this.premiumForm.setValue(premiumDetails)
      }
    } catch (error) {
    }
    super.register(this.premiumForm.controls.userAge.valueChanges).subscribe(newValue => {
      if(newValue > 100) {
        this._router.navigate([RouterLinks['FinanceError']])
      }
    });
  }

  buyPremium(): void {
    if(this.premiumForm.valid){ 
      let formValues:UserPremiumDetail = this.premiumForm.value as UserPremiumDetail;
      formValues['totalPremiumPay'] = this.calculateTotalPremium();
      formValues['countryName'] = this.financeService.getCountryNameFromCode(formValues.country);
      formValues['PremiumPlan'] = this.financeService.getPackageName(formValues.plan)
      this.localStore.saveData(PKEY,JSON.stringify(formValues))
      this._router.navigate([RouterLinks['FinanceSummary']])
    }else{
      alert('Please add your details')
    }
  }


  calculateTotalPremium() {
    if(this.premiumForm.controls.country.valid && this.premiumForm.controls.plan.valid && this.premiumForm.controls.userAge.valid) {
      const country = this.premiumForm.controls.country.value as string;
      const plan = this.premiumForm.controls.plan.value as number;
      const age = this.premiumForm.controls.userAge.value as number;

      return this.financeService.calculatePremium(country,age,plan)
    }
    return 0
  }

  calculatePlanPremium(planId: number){
    if(this.premiumForm.controls.country.valid && this.premiumForm.controls.userAge.valid) {
      const country = this.premiumForm.controls.country.value as string;
      const age = this.premiumForm.controls.userAge.value as number;
      return this.financeService.calculatePlanPremium(this.financeService.calculatePremium(country,age,1),planId)
    }
    return 0
  }
}
