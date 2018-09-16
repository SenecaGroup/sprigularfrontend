import {Image} from './nav.model';

export class NavService {
  private images: Image[] = [
    new Image(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/895px-Boostrap_logo.svg.png',
      'Bootstrap')
  ];

  getImages(): Image[] {
    const images = this.images.splice(0);
    return images;
  }

}
