import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject,takeUntil } from 'rxjs';
import { RouterLinks } from '../configs/routes';


@Component({
  selector: 'app-base',
  template: `
    <-- Rewrite in children -->
  `,
  styles: []
})
export class BaseComponent implements OnDestroy {
  protected unsubscribe$ = new Subject<boolean>();

  // Use this method to create auto-unsubscribe subscriptions to observables
  protected register(observable: Observable<any>): Observable<any> {
    return observable.pipe(takeUntil(this.unsubscribe$));
  }

  public ROUTE_URL = RouterLinks;

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  // Redirects app to the previous page
  goBack() {
    history.back();
  }
}
