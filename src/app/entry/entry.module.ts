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

@NgModule({
  imports: [
    CommonModule,
    ResourceModule
  ],
  declarations: [
    AsideComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    EntryComponent

  ],
    exports: [
    AsideComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    EntryComponent
  ]
})
export class EntryModule { }
