import { TestBed } from '@angular/core/testing';
import { CountryRates, Premium_Fix, PremiumPlans,IPremiumPlan, Countries, ICountry } from '../../../configs/config';  
import { PFinanceService } from './p-finance.service';

describe('PFinanceService', () => {
  let service: PFinanceService;

  beforeEach(() => {
    service = new PFinanceService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPackageName()', () => {
    it('Should return Standard package name  ', () => {
      expect(service.getPackageName(1)).toBe('Standard');
    });
    it('Should return Safe package name', () => {
      expect(service.getPackageName(2)).toBe('Safe');
    });
  });

  describe('getCountryNameFromCode()', () => {
    it('Should return Hong Kong for HKD ', () => {
      expect(service.getCountryNameFromCode('HKD')).toBe('Hong Kong');
    });
    it('Should return Hong Kong for USD ', () => {
      expect(service.getCountryNameFromCode('USD')).toBe('USA');
    });
  });

  describe('calculatePlanPremium()', () => {
    it('Should calculate premium extra price than standard plan', () => {
      expect(service.calculatePlanPremium(500,2)).toBe(250);
    })

    it('Should calculate premium extra price than standard plan', () => {
      expect(service.calculatePlanPremium(500,3)).toBe(375);
    })
  });

  describe('calculatePremium()', () => {
    it('Should calculate {Standard} premium for Hong Kong and age 50', () => {
      expect(service.calculatePremium('HKD',50,1)).toBe(500);
    })

    it('Should calculate {Standard} premium for USA and age 50', () => {
      expect(service.calculatePremium('USD',50,1)).toBe(1000);
    })
    
    it('Should calculate {Standard} premium for Hong Kong and age 50', () => {
      expect(service.calculatePremium('AUD',50,1)).toBe(1500);
    })
  });
});
