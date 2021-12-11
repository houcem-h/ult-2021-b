import { Component, OnInit } from '@angular/core';

import { CartService } from "src/app/services/cart.service";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartContent: any = [];
  public totalPrice: number = 0;
  public TAX_RATE: number = 0.2;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartContentDetails();
    this.computeTotalPrice();
  }

  private getCartContentDetails():void {
    this.cartContent = this.cartService.cartContent;
    for (let index = 0; index < this.cartContent.length; index++) {
     const course = courses.filter(course => course.id == this.cartContent[index].id)[0]
     this.cartContent[index].title = course.title;
     this.cartContent[index].price = course.price;
    }
  }

  private computeTotalPrice():void {
    this.cartContent.forEach((item: { price: number; quantity: number; }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

}
