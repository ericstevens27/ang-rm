import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './hero-list';
import {WeaponNames} from './weapon-names';
import {WEAPONS} from './weapon-names';
import {Weapon} from './weapon';
import {CombatTable} from './combat-tables';
import {MARTIAL_ARTS_STRIKING} from './combat-tables';

@Injectable()
export class DataService {
    getHeroes(): Hero[] {
        return HEROES;
    }
    getWeaponNames(): WeaponNames[] {
        return WEAPONS;
    }
     getWeapon(name: string): Weapon {
        return new Weapon();
     }
    getCombatTable(ind1: number, ind2: number): CombatTable {
        return MARTIAL_ARTS_STRIKING[ind1][ind2];
    }
}

