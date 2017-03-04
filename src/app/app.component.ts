import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero, heroWeapons } from './hero';
import { Weapon } from './weapon';
import { DataService } from './all.service';

import {combatTable} from './combat-tables';
import { WeaponService } from './weapon.service';

export class atNumbers {
  id: number;
}

export class criticalTypes {
  id: string;
  name: string;
}

const AT: atNumbers[] = [
  {id: 1},  {id: 2},  {id: 3},  {id: 4},  {id: 5},  {id: 6},  {id: 7},  {id: 8},  {id: 9},  {id: 10},
  {id: 11},  {id: 12},  {id: 13},  {id: 14},  {id: 15},  {id: 16},  {id: 17},  {id: 18},  {id: 19},  {id: 20}
];

const critType: criticalTypes[] = [
  {id: "P", name: "Puncture"},  {id: "S", name: "Slash"},  {id: "K", name: "Crush"},  {id: "G", name: "Grapple"},  {id: "U", name: "Unbalance"},  {id: "T", name: "Tiny"}
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
  weapTable: combatTable[];
  attackIndex = 0;
  atList = AT;
  attackType = 1;
  critList = critType;
  selectedHero: Hero;
  heroWeapon: heroWeapons;
  penalty = 0;
  advantage = 0;
  odSplit = 100;
  offense = 100;
  defense = 0;
  roll = 0;


  loadWeaponList() {
    this._dataService.getWeaponList().subscribe(data => this.weapons = data);
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  onSelectWeapon(wt: heroWeapons): void {
    this.heroWeapon = wt;
    this.loadWeaponTable(wt.table);
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
/*  loadWeaponElement(toHit: number, at: number): combatTable {
    return this.weapTable[toHit][at]
  }*/

  onKey(event: any) { // without type info
    this.offense = this.heroWeapon.base * (this.odSplit/100);
    this.defense = this.heroWeapon.base - this.offense;
    this.attackIndex = this.offense - this.penalty - -this.advantage - -this.roll;
    if (this.attackIndex < 0) {this.attackIndex = 0}
    if (this.attackIndex > 150) {this.attackIndex = 150}
  }

  getCritType(id: string) {
    return this.critList.filter(critList => critList.id === id)[0].name;
  }
  ngOnInit(): void {
    this.getHeroes();
    this.getWeapons();
    this.loadWeaponList();

  }

}

