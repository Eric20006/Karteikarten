import { RoutingService } from './../routing/routing.service';
import { ControlUserService } from './../../database/control-user/control-user.service';
import { NowAccService } from '../../database/now-acc/now-acc.service';
import { Injectable } from '@angular/core';
import * as error from 'src/json/Error.json';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _error:any;

  constructor(private nowAcc:NowAccService, private conrtolUser:ControlUserService, private routing:RoutingService) {
    this._error = error;
   }

  public control():void {
    if (this.conrtolUser.controlUser(this.nowAcc.getAcc().id)) return;
    else return this.routing.changeRoute(this._error.notLogin);
  }
}
