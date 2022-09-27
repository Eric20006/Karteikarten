import { RoutingService } from './../../_services/gen-functions/routing/routing.service';
import { Component, OnInit } from '@angular/core';
import * as error from 'src/json/Error.json';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _error:any;
  public content!: string;

  constructor(private route:RoutingService) {
    this._error = error;
  }

  ngOnInit(): void {
    if (this.route.controlRoute(this._error.notLogin)) return this.content = this._error.notLoginT;
    else this.content = this._error.notAvailableT;
  }

}
