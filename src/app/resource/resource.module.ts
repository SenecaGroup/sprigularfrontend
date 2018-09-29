import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResourceService} from './resource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ResourceService],
  declarations: []
})
export class ResourceModule { }
