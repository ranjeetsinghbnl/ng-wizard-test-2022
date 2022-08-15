import { TestBed } from '@angular/core/testing';

import { TemplatePageTitleStrategy } from './app-title.service';

describe('AppTitleService', () => {
  let service: TemplatePageTitleStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatePageTitleStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
