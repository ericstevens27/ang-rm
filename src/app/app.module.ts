import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { DataService } from './all.service';
import { HttpModule }      from '@angular/http';
import { WeaponService } from './weapon.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DataService,
    WeaponService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
