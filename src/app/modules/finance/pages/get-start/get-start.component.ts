import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { PKEY } from 'src/app/configs/config';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.scss']
})
export class GetStartComponent extends BaseComponent{

  constructor(private localStore: LocalService) { 
    super();
    this.localStore.removeData(PKEY)
  }
}
