import { Injectable } from '@angular/core';
import { Card } from '../modules/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  imagesArray: Card[] = [];
  page:number = 2;
  
  removeImageById(id:string) {
    this.imagesArray = this.imagesArray.filter(image => image.id!== id);
    console.log(this.imagesArray.length);
  }

}
