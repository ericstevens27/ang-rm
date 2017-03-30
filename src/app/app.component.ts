import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero, heroWeapons } from './hero';
import { Weapon } from './weapon';
import { DataService } from './all.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/list" routerLinkActive="active">List of Characters</a>
    </nav>
      <div>
    <label style="width: 10em; padding-top: 0; font-size: 1em">Debug?  <input style="height: 1em; padding-top: 0; font-size: 1em" type="checkbox" [(ngModel)]="debug"/>
    </label>
  </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css', './hero-detail.component.css']
})
export class AppComponent implements OnInit {

  // constructor(private _dataService: DataService, private weaponService: WeaponService) {}
  constructor(private _dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location
  ) {}

  title = 'Rolemaster Combat';
  heroes: Hero[];
  weapons: Weapon[];

  showStats = false;
  showCombat = false;

  debug = false;

  ngOnInit(): void {
    this.loadHeroes();
    // this.getWeapons();
    this.loadWeaponList();

  }
  loadHeroes(): void {
    this._dataService.getHeroes().subscribe(data => this.heroes = data);
  }

  loadWeaponList() {
    this._dataService.getWeaponList().subscribe(data => this.weapons = data);
  }
  /*
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

/!*  getWeapons(): void {
    // debugger;
      this.weaponService.getWeapons().then(weapons => this.weapons);
  }*!/
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


  calcAttackIndex () {
    this.attackIndex = this.offense - this.penalty - -this.advantage - -this.roll - this.enemyDefense;
    if (this.attackIndex < 0) {this.attackIndex = 0}
    if (this.attackIndex > this.attackMax) {this.attackIndex = this.attackMax}
  }
  private toggleShowStat(event: any) {
    console.log("Got click with:", this.showStats);
    if (this.showStats == true) {this.showStats = false} else {this.showStats = true}
  }*/

}

