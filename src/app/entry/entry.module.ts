import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './nav/category/category.component';
import { LinkComponent } from './nav/link/link.component';
import { EntryComponent } from "./entry.component";


import {ResourceModule} from '../resource/resource.module';
import {AboutComponent} from '../About/about.component';
import {LanguageComponent} from '../Language/language.component';
import {TipComponent} from '../Tip/tip.component';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {ServiceModule} from '../service/service.module';

@NgModule({
  imports: [
    CommonModule,
    ResourceModule,
    RouterModule,
    ServiceModule,
  ],
  declarations: [
    AsideComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    EntryComponent,
    AboutComponent,
    LanguageComponent,
    TipComponent
  ],
    exports: [
    AsideComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    EntryComponent,
    AboutComponent,
    LanguageComponent,
    TipComponent
  ]
})
export class EntryModule { }
