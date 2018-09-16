export class Image {
  public  imagePath: string;
  public  alter: string;

  constructor(imagePath: string, alter: string) {
    this.imagePath = imagePath;
    this.alter = alter;
  }

  getImagePath(): string {
   return this.imagePath;
  }

  getAlter(): string {
    return this.alter;
  }
}
