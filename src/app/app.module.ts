import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {DataService} from './all.service';
import {WeaponService} from "./weapon.service";
import { HttpModule }      from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [DataService, WeaponService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
