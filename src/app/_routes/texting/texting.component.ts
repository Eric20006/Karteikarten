/* eslint-disable @typescript-eslint/no-explicit-any */
import { RoutingService } from './../../_services/gen-functions/routing/routing.service';
import { Component, OnInit } from '@angular/core';
import * as text from 'src/json/Texte.json';

@Component({
  selector: 'app-texting',
  templateUrl: './texting.component.html',
  styleUrls: ['./texting.component.scss']
})
export class TextingComponent implements OnInit {
  private _text: any;
  public content!: any;

  constructor(private route:RoutingService) {
    this._text = text;
  }

  ngOnInit(): void {
    if (this.route.controlRoute('datenschutz'))  this.content = this._text.datenschutz;
    else this.content = this._text.impressum;
  }

}
