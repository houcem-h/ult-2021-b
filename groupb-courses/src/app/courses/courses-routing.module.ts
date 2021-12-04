import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CoursesDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    CoursesDetailsComponent
  ]
})
export class CoursesRoutingModule { }
