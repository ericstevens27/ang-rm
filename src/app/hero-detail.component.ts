import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero, heroWeapons } from './hero';
import { Weapon } from './weapon';
import { DataService } from './all.service';

import {combatTable} from './combat-tables';

@Component({
  selector: 'my-heroDetails',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./app.component.css', './hero-detail.component.css']
})
export class ListComponent implements OnInit {

  // constructor(private _dataService: DataService, private weaponService: WeaponService) {}
  constructor(private _dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location
  ) {}

  title = 'Rolemaster Combat';
  heroes: Hero[];
  weapons: Weapon[];
  weapTable: combatTable[];
  attackIndex = 0;
  attackType = 1;
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

  debug = false;


  loadWeaponList() {
    this._dataService.getWeaponList().subscribe(data => this.weapons = data);
  }

  onSelectCombat(hero: Hero): void {
    this.selectedHero = hero;
    this.showCombat =true;
    this.showStats = false;
    this._dataService.myHero = this.selectedHero;
    console.log("App on select combat", this.selectedHero, this._dataService.myHero)
    this.router.navigateByUrl('combat');
  }
  onSelectStats(hero: Hero): void {
    this.selectedHero = hero;
    this.showStats =true;
    this.showCombat = false;
    this._dataService.myHero = this.selectedHero;
    console.log("App on select stats", this.selectedHero, this._dataService.myHero)
    this.router.navigateByUrl('stats');
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

  loadWeaponTable(name: string) {
    return this._dataService.getWeaponTable(name).subscribe(data => this.weapTable = data);
  }

  onKey(event: any) { // without type info
    this.offense = this.heroWeapon.base * (this.odSplit/100);
    this.defense = this.heroWeapon.base - this.offense;
    this.calcAttackIndex();
  }

  ngOnInit(): void {
    this.loadHeroes();
    // this.getWeapons();
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

