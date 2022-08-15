// config.ts
export const KEY = '${}{#}@{#}@#{@121212#$&RS'
export const PKEY='premium';
export const APP_TITLE: string = 'Covergo Cover Health';
export const Premium_Fix: number = 10
export interface ICountry {
  name: string,
    rate: number,
    code: string
}
export const Countries:Array<ICountry> = [
  {
    name: 'Hong Kong',
    rate: 1,
    code: 'HKD'
  },
  {
    name: 'USA',
    rate: 2,
    code: 'USD'
  },
  {
    name: 'Australia',
    rate: 3,
    code: 'AUD'
  }
]

export interface IPremiumPlan {
  id: number,
  name: string,
  rate_v: number
}

export const PremiumPlans: Array<IPremiumPlan> = [
  {
    id: 1,
    name: "Standard",
    rate_v: 1
  },
  {
    id: 2,
    name: "Safe",
    rate_v: 0.5
  },
  {
    id: 3,
    name: "Super Safe",
    rate_v: 0.75
  }
]

export const CountryRates: { [key: string]: number } = {
  'HKD': 1,
  'USD': 2,
  'AUD': 3,
}


export interface UserPremiumDetail {
  userName: string;
  userAge: number;
  country: string;
  plan: number;
  totalPremiumPay:number;
  countryName:string;
  PremiumPlan:string;
}