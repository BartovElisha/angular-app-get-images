import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/modules/card.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private http: HttpClient, private imgService: ImagesService) { }

  API_URL = 'https://picsum.photos/v2/list';
  
  imagesArray:Card[] = this.imgService.imagesArray;

  ngOnInit(): void {
  }

  addRandomImages() {
    this.http.get(this.API_URL).subscribe({
    next: (imagesArray:any) => {
      imagesArray.forEach((image:any) => 
      this.imgService.imagesArray.push(new Card(image.author,image.download_url)))
      console.log(this.imagesArray);
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
    })
  }

}
