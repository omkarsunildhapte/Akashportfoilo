import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenet/home/home.component';
import { ProjectComponent } from './compenet/project/project.component';
import { AboutComponent } from './compenet/about/about.component';
import { TestimonialComponent } from './compenet/testimonial/testimonial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path:'testimonial', component: TestimonialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
