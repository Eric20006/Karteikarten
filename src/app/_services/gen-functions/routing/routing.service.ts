import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router:Router) { }

  public changeRoute(route:string):void {
    this.router.navigate([route]);
  }

  public controlRoute(route:string): boolean {
    if (location.pathname == '/'+route) return true;
    else return false;
  }

}
