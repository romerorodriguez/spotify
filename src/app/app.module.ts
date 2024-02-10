//el padre de todos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //todo: declaraciones, componente, directivas, pipes
    AppComponent, /*AuthComponent, FavoritesPageComponent, PagesComponent*/
  ],
  imports: [ //todo: solo se importan otros modules, propios de angular 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
