import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlUserService {

  public controlUser(id:number): boolean {
    //Databank
    if (id == 1) return true;
    else return false;
  }

}
