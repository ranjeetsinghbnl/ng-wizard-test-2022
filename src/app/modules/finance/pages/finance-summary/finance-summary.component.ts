import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinks } from 'src/app/configs/routes';
import { BaseComponent } from '../../../../base/base.component';
import { UserPremiumDetail } from '../../../../configs/config';
import { LocalService } from '../../../../services/local.service';
import { PFinanceService } from '../../services/p-finance.service';

@Component({
  selector: 'app-finance-summary',
  templateUrl: './finance-summary.component.html',
  styleUrls: ['./finance-summary.component.scss']
})
export class FinanceSummaryComponent extends BaseComponent {

  premiumDetails:undefined | UserPremiumDetail;
  constructor(
    private localStore: LocalService,
    private _router: Router
  ) {
    super();
    try {
      const details = this.localStore.getData('premium')
      if(details) {
        this.premiumDetails = JSON.parse(details);
      }
    } catch (error) {
      this._router.navigate([RouterLinks['FinanceDetails']])
    }
   }
}
