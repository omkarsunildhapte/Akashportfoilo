import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compenet/header/header.component';
import { HomeComponent } from './compenet/home/home.component';
import { MenuComponent } from './compenet/menu/menu.component';
import { FooterComponent } from './compenet/footer/footer.component';
import { ProjectComponent } from './compenet/project/project.component';
import { AboutComponent } from './compenet/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ProjectComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
