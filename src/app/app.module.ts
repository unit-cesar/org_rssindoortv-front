import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './pages/not-found.page/not-found.page.component';
import { HomePageComponent } from './pages/home.page/home.page.component';


// ngx-owl-carousel-o
import { CarouselNewsComponent } from './includes/carousel-news/carousel-news.component';
import { CarouselTmplsComponent } from './includes/carousel-tmpls/carousel-tmpls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    CarouselNewsComponent,
    CarouselTmplsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
