import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/modules/card.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private imgService: ImagesService) { }

  // card! = card input exist
  @Input() card!: Card;

  imagesArray:Card[] = this.imgService.imagesArray;

  ngOnInit(): void {
  }

  formatDate(d:Date): string {
    const datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    return datestring;
  }

  removeCard() {
    console.log(this.card);
    this.imgService.removeImageById(this.card.id);
  }  

}
