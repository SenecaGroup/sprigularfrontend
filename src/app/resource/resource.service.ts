import { Injectable } from '@angular/core';
import {Image} from '../model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private images: Image[] = [
    new Image(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/895px-Boostrap_logo.svg.png',
      'Bootstrap')
  ];

  getImages(): Image[] {
    return this.images.slice(0);
  }
  constructor() { }
}
