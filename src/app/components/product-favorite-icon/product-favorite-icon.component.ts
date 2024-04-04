import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-favorite-icon',
  standalone: true,
  imports: [],
  templateUrl: './product-favorite-icon.component.html',
  styleUrl: './product-favorite-icon.component.scss'
})
export class ProductFavoriteIconComponent implements OnInit {
  @Input() favorite!: boolean;
  @Input() id!: string;
  favoriteStatus!: boolean;

  isFavorite(): boolean {
    return this.favorite;
  }

  addFavorite(id: string) {
    // Do change
    this.favorite = true;
  }

  removeFavorite(id: string){
    // Do change
    this.favoriteStatus = this.favorite = false;
  }

  onMouseEnterOnIcon() {
    if (!this.favorite) {
      this.favoriteStatus = true;
    }
  }

  onMouseLeaveOnIcon() {
    if (!this.favorite) {
      this.favoriteStatus = false;
    }
  }

  ngOnInit() {
    this.favoriteStatus = this.favorite;
  }
}
