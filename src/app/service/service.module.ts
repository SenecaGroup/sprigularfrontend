import {Injectable, NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {CategoryRepository} from './repository/category-repository.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [CategoryRepository],
  declarations: []
})

@Injectable()
export class ServiceModule {
}
