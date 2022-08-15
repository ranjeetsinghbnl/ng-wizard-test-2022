import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './services/app-title.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
