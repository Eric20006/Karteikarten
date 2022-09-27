import { NowAcc } from './../../../_interfaces/now-acc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NowAccService {

  private nowAcc: NowAcc;

  constructor() {
    this.nowAcc = {
      name: '',
      id: 1
    };
  }

  public getAcc():NowAcc {
    return this.nowAcc;
  }

  public setAcc(name:string, id: number):void {
    this.nowAcc.name = name;
    this.nowAcc.id = id;
  }
}
