import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ButtonComponent} from "./button/button.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {ProductFavoriteIconComponent} from "../product-favorite-icon/product-favorite-icon.component";
import {Dialog} from "@angular/cdk/dialog";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatIcon,
    ButtonComponent,
    NgOptimizedImage,
    NgClass,
    ProductFavoriteIconComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  imageUrl!: string;
  @Input() product!: Product;

  constructor(public dialog: Dialog) {}

  toggleImage(elt: HTMLElement) {
    const imgSrc = elt.attributes.getNamedItem('src')?.value;
    this.product.imageUrls.forEach((imageUrl) => {
      if (imageUrl != imgSrc) {
        this.imageUrl = imageUrl;
      }
    });
  }

  ngOnInit(): void {
    this.imageUrl = this.product.imageUrls[0];
  }

  showProductModal() {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: this.product
    })

    // dialogRef.close()
  }
}
