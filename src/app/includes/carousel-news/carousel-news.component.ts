import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-news',
  templateUrl: './carousel-news.component.html',
  styleUrls: ['./carousel-news.component.scss']
})
export class CarouselNewsComponent {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    // navSpeed: 700,
    // navText: ['', ''],
    items: 1,
    // animateIn: 'flipInX',
    // animateOut: 'fadeOut',

    // animateOut: 'slideOutDown',
    animateIn: 'animate__flipInX',
    // smartSpeed: 450,


    // autoWidth: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   // 400: {
    //   //   items: 2
    //   // },
    //   // 740: {
    //   //   items: 3
    //   // },
    //   // 940: {
    //   //   items: 4
    //   // }
    // },

  }
}
