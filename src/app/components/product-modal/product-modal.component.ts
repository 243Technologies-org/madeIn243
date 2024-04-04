import {Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {ButtonComponent} from "../product-card/button/button.component";
import {ProductFavoriteIconComponent} from "../product-favorite-icon/product-favorite-icon.component";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [ButtonComponent, ProductFavoriteIconComponent],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  imgUrl: string;

  constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public product: Product) {
    this.imgUrl = product.imageUrls[0];
  }

  showImage(imgUrl: string) {
    this.imgUrl = imgUrl;
  }
}
