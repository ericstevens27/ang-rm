import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Weapon } from './weapon';

@Injectable()
export class WeaponService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private weaponUrl = 'http://localhost:3010/weapon/';
  // private weaponUrl = 'weapon/';

  constructor(private http: Http) { }

  getWeapons(): Promise<Weapon[]> {
    return this.http.get(this.weaponUrl)
      .toPromise()
      .then(response => response.json().data as Weapon[])
      .catch(this.handleError);
  }

  getWeapon(id: string): Promise<Weapon> {
    const url = `${this.weaponUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Weapon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
