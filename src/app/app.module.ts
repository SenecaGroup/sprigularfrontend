import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntrymoduleComponent } from './entrymodule/entrymodule.component';
import { HeaderComponent } from './entrymodule/header/header.component';
import { FooterComponent } from './entrymodule/footer/footer.component';
import { AsideComponent } from './entrymodule/aside/aside.component';
import { CategoryComponent } from './entrymodule/header/category/category.component';
import { LinkComponent } from './entrymodule/header/link/link.component';
import { NavComponent } from './entrymodule/header/nav/nav.component';
import { MainComponent } from './entrymodule/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrymoduleComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    CategoryComponent,
    LinkComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
