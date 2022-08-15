import { Injectable } from '@angular/core';
import { CountryRates, Premium_Fix, PremiumPlans,IPremiumPlan, Countries, ICountry } from '../../../configs/config';

@Injectable({
  providedIn: 'root'
})
export class PFinanceService {

  private _countryRates = CountryRates;
  private _premium_Fix = Premium_Fix;
  private _premiumPlans = PremiumPlans;
  private _countries = Countries;
  constructor() { }

  calculatePremium(cCode: string, age:number, planId:number) {
    let price = this._premium_Fix * age * this._countryRates[cCode];
    const fPlan:undefined | IPremiumPlan = this._premiumPlans.find(plan => planId === plan.id);
    if(fPlan && fPlan.id !=1) {
      return price += price * fPlan.rate_v;
    }
    return price;
  }

  calculatePlanPremium(standardPrice: number, planId:number) {
    const fPlan:undefined | IPremiumPlan = this._premiumPlans.find(plan => planId === plan.id);
    if(fPlan) {
      return standardPrice * fPlan.rate_v;
    }
    return 0
  }

  getCountryNameFromCode(code: string = "") {
    const country:undefined | ICountry = this._countries.find(country => code == country.code);
    if(country) {
      return country.name;
    }
    return "";
  }

  getPackageName(planId: number) {
    const fPlan:undefined | IPremiumPlan = this._premiumPlans.find(plan => planId === plan.id);
    if(fPlan) {
      return fPlan.name;
    }
    return "";
  }
}
