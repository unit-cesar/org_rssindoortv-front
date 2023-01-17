import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-tmpls',
  templateUrl: './carousel-tmpls.component.html',
  styleUrls: ['./carousel-tmpls.component.scss']
})
export class CarouselTmplsComponent {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    // navSpeed: 700,
    // navText: ['', ''],
    // animateIn: 'flipInX',
    items: 1,
    animateOut: 'animate__zoomOut',
    animateIn: 'animate__fadeIn',

    // animateOut: 'fadeOut',
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
