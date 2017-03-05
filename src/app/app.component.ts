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
  enemyDefense = 100;
  roll = 0;
  attackMax = 150;
  showStats = false;
  showCombat = false;
  trueValue = true;
  falseValue = false;

  debug = false;


  loadWeaponList() {
    this._dataService.getWeaponList().subscribe(data => this.weapons = data);
  }

  onSelectCombat(hero: Hero): void {
    this.selectedHero = hero;
    this.showCombat =true;
    this.showStats = false;
  }
  onSelectStats(hero: Hero): void {
    this.selectedHero = hero;
    this.showStats =true;
    this.showCombat = false;
}
  onSelectWeapon(wt: heroWeapons): void {
    this.heroWeapon = wt;
    this.loadWeaponTable(wt.table);
    this.advantage = wt.itemBonus;
    this.offense = wt.base * (this.odSplit/100);
    this.attackMax = wt.maximum;
    this.calcAttackIndex();
  }
  loadHeroes(): void {
    this._dataService.getHeroes().subscribe(data => this.heroes = data);
  }
  getWeapons(): void {
    // debugger;
      this.weaponService.getWeapons().then(weapons => this.weapons);
  }
  loadWeaponTable(name: string) {
      return this._dataService.getWeaponTable(name).subscribe(data => this.weapTable = data);
  }

  onKey(event: any) { // without type info
    this.offense = this.heroWeapon.base * (this.odSplit/100);
    this.defense = this.heroWeapon.base - this.offense;
    this.calcAttackIndex();
  }

  getCritType(id: string) {
    return this.critList.filter(critList => critList.id === id)[0].name;
  }
  ngOnInit(): void {
    this.loadHeroes();
    this.getWeapons();
    this.loadWeaponList();

  }
  calcAttackIndex () {
    this.attackIndex = this.offense - this.penalty - -this.advantage - -this.roll - this.enemyDefense;
    if (this.attackIndex < 0) {this.attackIndex = 0}
    if (this.attackIndex > this.attackMax) {this.attackIndex = this.attackMax}
  }
  private toggleShowStat(event: any) {
    console.log("Got click with:", this.showStats);
    if (this.showStats == true) {this.showStats = false} else {this.showStats = true}
  }

}

