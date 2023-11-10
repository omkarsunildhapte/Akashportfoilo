import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './compenet/about/about.component';
import { FooterComponent } from './compenet/footer/footer.component';
import { HeaderComponent } from './compenet/header/header.component';
import { HomeComponent } from './compenet/home/home.component';
import { ProjectComponent } from './compenet/project/project.component';
import { AngularFireModule } from '@angular/fire/compat';
import { TestimonialComponent } from './compenet/testimonial/testimonial.component';
export const firebaseConfig = {
  apiKey: "AIzaSyDzy0c2jmNc7GX0ORCQ_VNaFjxMy6acrzQ",
  authDomain: "akshaybhagwat-14950.firebaseapp.com",
  projectId: "akshaybhagwat-14950",
  storageBucket: "akshaybhagwat-14950.appspot.com",
  messagingSenderId: "519535135131",
  appId: "1:519535135131:web:407924db3f94be0b33793e",
  measurementId: "G-96P2SQP3G4"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProjectComponent,
    AboutComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
