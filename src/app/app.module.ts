import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HeaderComponent } from './first-page/header/header.component';
import { HeaderTopComponent } from './first-page/header/header-top/header-top.component';
import { HeaderNavbarComponent } from './first-page/header/header-navbar/header-navbar.component';
import { SidebarComponent } from './first-page/sidebar/sidebar.component';
import { CalendarComponent } from './first-page/sidebar/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderNavbarComponent,
    SidebarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
