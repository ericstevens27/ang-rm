import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { WeaponNames } from './weapon-names';
import { Weapon } from './weapon';
import { DataService } from './all.service';

import {CombatTable} from './combat-tables';
import {MARTIAL_ARTS_STRIKING} from './combat-tables';

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

  constructor(private _dataService: DataService) {}

  title = 'Rolemaster Combat';
  heroes: Hero[];
  weapName: WeaponNames[];
  combat = MARTIAL_ARTS_STRIKING;
  weapTable: Weapon;
  attackValue = 0;
  attackIndex = 0;
  atList = AT;
  selectedHero: Hero;
  penalty = 0;
  advantage = 0;
  roll = 0;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this._dataService.getHeroes();
  }
  getWeaponNames(): void {
      this.weapName = this._dataService.getWeaponNames();
  }
  getWeapon(name: string): Weapon {
      return this._dataService.getWeapon(name);
  }
  onKey(event: any) { // without type info
    this.attackValue = this.selectedHero.off - this.penalty - -this.advantage - -this.roll;
    this.attackIndex = this.attackValue - 1;
    if (this.attackIndex < 0) {this.attackIndex = 0};
/*    console.log(this.attackValue);
    console.log(this.attackIndex);*/
  }
  ngOnInit(): void {
    this.getHeroes();
    this.getWeaponNames();
  }

}

