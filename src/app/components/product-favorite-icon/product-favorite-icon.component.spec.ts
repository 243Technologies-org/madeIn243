import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFavoriteIconComponent } from './product-favorite-icon.component';

describe('ProductFavoriteIconComponent', () => {
  let component: ProductFavoriteIconComponent;
  let fixture: ComponentFixture<ProductFavoriteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFavoriteIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFavoriteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
