import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsComponent } from './stats.component';
import { CombatComponent } from './combat.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'stats', component: StatsComponent },
  { path: 'combat',     component: CombatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

