import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionComponent } from './product-description.component';

import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';

describe('ProductDescriptionComponent', () => {
  let component: ProductDescriptionComponent;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['.product-description.component.css']
})

export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productService: ProductService){ }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
}