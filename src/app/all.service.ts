import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Hero} from './hero';
// import {HEROES} from './hero-list';
import {WeaponNames} from './weapon-names';
import {WEAPONS} from './weapon-names';
import {Weapon} from './weapon';
import {combatTable} from './combat-tables';

@Injectable()
export class DataService {
  private baseURL='http://localhost:3010/';
  constructor(private http : Http){
  }
  public myHero: Hero;

  getWeaponList() {
    return this.http.get(this.baseURL + 'weapon')
      .map((res:Response) => res.json());
  }
  getWeaponTable(name: string) {
    return this.http.get(this.baseURL + 'weapon/' + name)
      .map((res:Response) => res.json());
  }
    getHeroes() {
      return this.http.get(this.baseURL + 'users')
        .map((res:Response) => res.json());
    }
/*  getHeroes(): Hero[] {
    return HEROES;
  }*/
}

