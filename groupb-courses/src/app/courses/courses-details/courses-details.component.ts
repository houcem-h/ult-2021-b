import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  public course?: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      this.course = courses.filter(course => course.id == courseId)[0];

    });
  }

}
