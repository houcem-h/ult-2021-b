import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CoursesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CoursesDetailsComponent
  ]
})
export class CoursesRoutingModule { }
