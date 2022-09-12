import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ImageComponent } from './components/image/image.component';
import { CardComponent } from './components/card/card.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { ImagesComponent } from './components/images/images.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImageComponent,
    CardComponent,
    DisplayCardsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
