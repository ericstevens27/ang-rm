import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent }  from './app.component';
import { StatsComponent } from './stats.component';
import { CombatComponent } from './combat.component';

import { DataService } from './all.service';

import { AppRoutingModule }     from './app-routing.module';

// import { WeaponService } from './weapon.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
],
  declarations: [
    AppComponent,
    StatsComponent,
    CombatComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
