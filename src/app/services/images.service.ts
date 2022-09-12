import { Injectable } from '@angular/core';
import { Card } from '../modules/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  imagesArray: Card[] = [];

}
