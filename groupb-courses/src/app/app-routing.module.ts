import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
