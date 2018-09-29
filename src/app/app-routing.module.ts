import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {EntryComponent} from './entry/entry.component';
import {LanguageComponent} from './Language/language.component';
import {TipComponent} from './Tip/tip.component';
import {AboutComponent} from './About/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/entry', pathMatch: 'full'},
  { path: 'entry', component: EntryComponent},
  { path: 'about', component: AboutComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'tip', component: TipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
