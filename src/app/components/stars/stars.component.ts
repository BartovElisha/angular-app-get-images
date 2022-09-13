import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }

  @Input() starsCounter = 5;
  @Input() volume = 0;

  mouseOverItemIndex = 0;

  @Output() onItemSelect = new EventEmitter<number>(); 
  
  setLikes(starsCounter: number, likes: number) {
    if(likes < 0) {
      likes = 0;
    } 

    if(likes > starsCounter) {
      likes = starsCounter;
    }      

    this.onItemSelect.emit(likes);
  }  

  ngOnInit(): void {
  }

}
