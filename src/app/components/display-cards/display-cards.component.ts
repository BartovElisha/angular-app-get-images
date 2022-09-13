import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/modules/card.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

  constructor(private imgService: ImagesService) { }

  imagesArray:Card[] = this.imgService.imagesArray;

  ngOnInit(): void {
  }

}
