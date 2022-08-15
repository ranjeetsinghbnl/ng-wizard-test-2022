import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { APP_TITLE } from '../configs/config';

@Injectable({
  providedIn: 'root'
})
export class TemplatePageTitleStrategy extends TitleStrategy  {

  constructor(
    private readonly title: Title
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${APP_TITLE} | ${title}`);

    }
  }
}