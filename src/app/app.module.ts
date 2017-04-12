import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { StatsComponent } from './stats.component';
import { CombatComponent } from './combat.component';
import { ListComponent } from './hero-detail.component';

import { DataService } from './all.service';

import { AppRoutingModule }     from './app-routing.module';

// import { WeaponService } from './weapon.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
],
  declarations: [
    AppComponent,
    StatsComponent,
    CombatComponent,
    ListComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
