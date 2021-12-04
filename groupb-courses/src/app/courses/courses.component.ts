import { Component, OnInit } from '@angular/core';

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList = courses;
  public cartContent: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.coursesList);
    this.cartContent = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  public addToCart(id: string) {
    const course = this.cartContent.filter(elem => elem.id == id)[0];
    if (course) {
      course.quantity++;
    } else {
      this.cartContent.push({id: id, quantity: 1})
    }
    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }

}
