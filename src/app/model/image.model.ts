export class Image {
  private  imagePath: string;
  private  alter: string;

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
