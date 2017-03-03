import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { WeaponNames } from './weapon-names';
import { Weapon } from './weapon';
import { DataService } from './all.service';

import {combatTable} from './combat-tables';
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
  weapTable: combatTable[];
  attackValue = 0;
  attackIndex = 0;
  atList = AT;
  selectedHero: Hero;
  penalty = 0;
  advantage = 0;
  roll = 0;
  attackRow = 85;
  attackType = 1;
  selectedWeapon: Weapon;
  selectedWeaponDefault = 'Falchion';

  loadWeaponList() {
    this._dataService.getWeaponList().subscribe(data => this.weapons = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this._dataService.getHeroes();
  }
  getWeapons(): void {
    // debugger;
      this.weaponService.getWeapons().then(weapons => this.weapons);
  }
  loadWeaponTable(name: string) {
      return this._dataService.getWeaponTable(name).subscribe(data => this.weapTable = data);
  }
  loadWeaponElement(toHit: number, at: number): combatTable {
    return this.weapTable[toHit][at];
  }

  onKey(event: any) { // without type info
    this.attackIndex = this.selectedHero.off - this.penalty - -this.advantage - -this.roll;
    if (this.attackIndex < 0) {this.attackIndex = 0};
    if (this.attackIndex >150) {this.attackIndex = 150};
  }
  passIndex(event: any) { // without type info
    console.log (this.selectedWeapon.weapon, this.selectedWeapon.table, this.selectedWeapon.fumble);
    this.loadWeaponTable(this.selectedWeapon.table);
  }
  ngOnInit(): void {
    this.getHeroes();
    this.getWeapons();
    this.loadWeaponList();

  }

}

