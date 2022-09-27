import { RoutingService } from './../../../../_services/gen-functions/routing/routing.service';
import { Onload } from 'src/app/_interfaces/onload';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() files !: Onload[];

  constructor(public route:RoutingService) { }
}
