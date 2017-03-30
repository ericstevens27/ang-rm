import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsComponent } from './stats.component';
import { CombatComponent } from './combat.component';
import { ListComponent } from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'combat',     component: CombatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

