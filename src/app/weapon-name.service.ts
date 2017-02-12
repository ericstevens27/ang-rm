import { Injectable } from '@angular/core';

import {WeaponNames} from './weapon-names';
import {WEAPONS} from './weapon-names';

@Injectable()
export class WeaponNameService {
    getWeaponNames(): WeaponNames[] {
        return WEAPONS;
    }
}
