import { ControlService } from './../../_services/gen-functions/control/control.service';
import { NowAccService } from '../../_services/database/now-acc/now-acc.service';
import { OnloadService } from './../../_services/database/onload/onload.service';
import { Component, OnInit } from '@angular/core';
import { Onload } from 'src/app/_interfaces/onload';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public files!: Onload[];
  public filenames!: string[];

  constructor(private onLoad:OnloadService, public test:NowAccService, private control:ControlService) { }

  ngOnInit(): void {
    this.control.control();
    this.files = this.onLoad.getOnload();
  }

}
