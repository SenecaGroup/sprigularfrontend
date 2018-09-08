import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './header/category/category.component';
import { LinkComponent } from './header/link/link.component';
import { NavComponent } from './header/nav/nav.component';
import { EntryComponent } from "./entry.component";

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    NavComponent,
    EntryComponent
  ],
  exports: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CategoryComponent,
    LinkComponent,
    NavComponent,
    EntryComponent
  ]
})
export class EntryModule { }
