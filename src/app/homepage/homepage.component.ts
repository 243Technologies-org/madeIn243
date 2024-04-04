import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {ButtonComponent} from "../components/product-card/button/button.component";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CountUp, CountUpOptions} from "countup.js/dist/countUp"
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";
import {MatIcon} from "@angular/material/icon";
import {AccordionComponent} from "../components/accordion/accordion.component";
import GLightbox from 'glightbox';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ButtonComponent,
    CarouselModule,
    NgOptimizedImage,
    NgForOf,
    CdkAccordion,
    AccordionComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="bi-chevron-left"></i>', '<i class="bi-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  products!: Product[];
  counterOptions: CountUpOptions = {
    duration: 3,
    enableScrollSpy: true
  }

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        id: '1',
        name: 'Product name 1',
        productBy: 'Society name',
        price: 120000,
        imageUrls: [
          './assets/p1.png',
          './assets/p2.png'
        ],
        favorite: false,
        description: 'Lorem ipsum dolor sit amet consectetur. Eu non sed lectus augue amet. A massa sed ultrices quis nunc. Quam vulputate iaculis auctor ac volutpat. Mattis facilisis curabitur ipsum lorem fames. Ut et dictumst nec nisi dolor amet. Varius consectetur euismod massa auctor habitant sed turpis neque. Tincidunt sollicitudin suspendisse sollicitudin eu elementum scelerisque orci tincidunt. At eget posuere proin amet at nulla nulla eu diam. Duis tellus risus purus aliquet.'
      },
      {
        id: '2',
        name: 'Product name 2',
        productBy: 'Society name',
        price: 120000,
        imageUrls: [
          './assets/p1.png',
          './assets/p2.png'
        ],
        favorite: true,
        description: 'Lorem ipsum dolor sit amet consectetur. Eu non sed lectus augue amet. A massa sed ultrices quis nunc. Quam vulputate iaculis auctor ac volutpat. Mattis facilisis curabitur ipsum lorem fames. Ut et dictumst nec nisi dolor amet. Varius consectetur euismod massa auctor habitant sed turpis neque. Tincidunt sollicitudin suspendisse sollicitudin eu elementum scelerisque orci tincidunt. At eget posuere proin amet at nulla nulla eu diam. Duis tellus risus purus aliquet.'
      },
      {
        id: '3',
        name: 'Product name 3',
        productBy: 'Society name',
        price: 120000,
        imageUrls: [
          './assets/p1.png',
          './assets/p2.png'
        ],
        favorite: false,
        description: 'Lorem ipsum dolor sit amet consectetur. Eu non sed lectus augue amet. A massa sed ultrices quis nunc. Quam vulputate iaculis auctor ac volutpat. Mattis facilisis curabitur ipsum lorem fames. Ut et dictumst nec nisi dolor amet. Varius consectetur euismod massa auctor habitant sed turpis neque. Tincidunt sollicitudin suspendisse sollicitudin eu elementum scelerisque orci tincidunt. At eget posuere proin amet at nulla nulla eu diam. Duis tellus risus purus aliquet.'
      },
      {
        id: '4',
        name: 'Product name 4',
        productBy: 'Society name',
        price: 120000,
        imageUrls: [
          './assets/p1.png',
          './assets/p2.png'
        ],
        favorite: true,
        description: 'Lorem ipsum dolor sit amet consectetur. Eu non sed lectus augue amet. A massa sed ultrices quis nunc. Quam vulputate iaculis auctor ac volutpat. Mattis facilisis curabitur ipsum lorem fames. Ut et dictumst nec nisi dolor amet. Varius consectetur euismod massa auctor habitant sed turpis neque. Tincidunt sollicitudin suspendisse sollicitudin eu elementum scelerisque orci tincidunt. At eget posuere proin amet at nulla nulla eu diam. Duis tellus risus purus aliquet.'
      },
      {
        id: '5',
        name: 'Product name 5',
        productBy: 'Society name',
        price: 120000,
        imageUrls: [
          './assets/p1.png',
          './assets/p2.png'
        ],
        favorite: false,
        description: 'Lorem ipsum dolor sit amet consectetur. Eu non sed lectus augue amet. A massa sed ultrices quis nunc. Quam vulputate iaculis auctor ac volutpat. Mattis facilisis curabitur ipsum lorem fames. Ut et dictumst nec nisi dolor amet. Varius consectetur euismod massa auctor habitant sed turpis neque. Tincidunt sollicitudin suspendisse sollicitudin eu elementum scelerisque orci tincidunt. At eget posuere proin amet at nulla nulla eu diam. Duis tellus risus purus aliquet.'
      }
    ];
    this.countUp('partners', 37);
    this.countUp('startup', 29);
    this.countUp('socials', 15);
    this.countUp('products', 500);
    GLightbox({});
  }

  countUp(id: string, value: number) {
    const countUp = new CountUp(id, value, this.counterOptions);
    countUp.start();
  }
}
