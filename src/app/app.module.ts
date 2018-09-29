import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {EntryModule} from "./entry/entry.module";
import {AppComponent} from "./app.component";

import { AboutComponent } from './about/about.component';

import { LanguageComponent } from './language/language.component';
import { TipComponent } from './tip/tip.component';

import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {ResourceService} from './resource/resource.service';
import {ResourceModule} from './resource/resource.module';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LanguageComponent,
    TipComponent
  ],

  imports: [
    BrowserModule,
    EntryModule,
    ResourceModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

