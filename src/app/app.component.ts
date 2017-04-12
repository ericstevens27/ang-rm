import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero, heroWeapons } from './hero';
import { Weapon } from './weapon';
import { DataService } from './all.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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

}

