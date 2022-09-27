import { Injectable } from '@angular/core';
import { Onload } from 'src/app/_interfaces/onload';

@Injectable({
  providedIn: 'root'
})

export class OnloadService {
  private onLoad!:Onload[];

  public getOnload():Onload[] {
    this.onLoad = [{
      name: 'Eng1',
      icon: 'check',
      description: 'Lorem ipsum dolores'
    },
    {
      name: 'Eng1',
      icon: 'check',
      description: 'Hallo'
    }];

    return this.onLoad;
  }
}
