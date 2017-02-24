import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { WeaponNames } from './weapon-names';
import { Weapon } from './weapon';
import { DataService } from './all.service';

import {CombatTable} from './combat-tables';
import {MARTIAL_ARTS_STRIKING} from './combat-tables';
import { WeaponService } from './weapon.service';

export class atNumbers {
  id: number;
}

const AT: atNumbers[] = [
  {id: 1},  {id: 2},  {id: 3},  {id: 4},  {id: 5},  {id: 6},  {id: 7},  {id: 8},  {id: 9},  {id: 10},
  {id: 11},  {id: 12},  {id: 13},  {id: 14},  {id: 15},  {id: 16},  {id: 17},  {id: 18},  {id: 19},  {id: 20}
];

@Component({
  selector: 'my-app',
  templateUrl: './app/hero-detail.component.html',
  styleUrls: ['./app/app.component.css', './app/hero-detail.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _dataService: DataService, private weaponService: WeaponService) {}

  title = 'Rolemaster Combat';
  heroes: Hero[];
  weapons: Weapon[];
  combat = MARTIAL_ARTS_STRIKING;
  weapTable: Weapon;
  atList = AT;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this._dataService.getHeroes();
  }
  getWeapons(): void {
    debugger;
      this.weaponService.getWeapons().then(weapons => this.weapons);
  }
  getWeapon(name: string): Weapon {
      return this._dataService.getWeapon(name);
  }
/*  getTable(ind1: number, ind2: number): CombatTable {
    return this._dataService.getCombatTable(ind1, ind2);
  }*/
  ngOnInit(): void {
    this.getHeroes();
    this.getWeapons();
  }

}

