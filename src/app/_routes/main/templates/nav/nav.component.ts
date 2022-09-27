import { RoutingService } from './../../../../_services/gen-functions/routing/routing.service';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Onload } from 'src/app/_interfaces/onload';
import { Component, Input, OnInit } from '@angular/core';
import * as nav from '../../../../../json/Navigation.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  @Input() filename!: Onload[];

  public triggerMobileView: boolean;
  public _nav:any;
  public navForNGHelper:any[];
  public fileLinkName: string;

  constructor(public router:RoutingService) {
    this.triggerMobileView = false;
    this._nav = nav;
    this.navForNGHelper = [];
    this.fileLinkName = 'datei';
  }

  public changeTriggerMobileView(): void {
    if (this.triggerMobileView) this.triggerMobileView = false;
    else this.triggerMobileView = true;
  }

  ngOnInit(): void {
    this.ngForHelper();
  }

  private ngForHelper(): void {
    for (let i = 0; i < this._nav.nav.length; i++) {
      this.navForNGHelper.push(this._nav.nav[i]);
    }
  }

}
