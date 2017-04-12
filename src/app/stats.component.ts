import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Hero, heroWeapons, heroStatistics, items, heroSkills } from './hero';
import { DataService } from './all.service';

import {combatTable} from './combat-tables';

@Component({
  selector: 'heroStats',
  templateUrl: './user.component.html',
  styleUrls: ['./app.component.css', './hero-detail.component.css']
})
export class StatsComponent implements OnInit {

  // constructor(private _dataService: DataService, private weaponService: WeaponService) {}
  constructor(private _dataService: DataService) {}

  title = 'Rolemaster Combat';
  heroes: Hero[];
  weapTable: combatTable[];
  attackIndex = 0;
  selectedHero: Hero;
  heroWeapon: heroWeapons;
  showStats = false;
  showCombat = false;

  debug = false;

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

  loadHeroes(): void {
    this._dataService.getHeroes().subscribe(data => this.heroes = data);
  }
  loadWeaponTable(name: string) {
    return this._dataService.getWeaponTable(name).subscribe(data => this.weapTable = data);
  }

  ngOnInit(): void {
    this.selectedHero = this._dataService.myHero;
    console.log("OnInit stats", this._dataService.myHero, this.selectedHero);
  }

  private toggleShowStat(event: any) {
    console.log("Got click with:", this.showStats);
    if (this.showStats == true) {this.showStats = false} else {this.showStats = true}
  }

}


