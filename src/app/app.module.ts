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
import { EmployeesComponent } from './first-page/sidebar/employees/employees.component';
import { BranchComponent } from './first-page/sidebar/branch/branch.component';
import { DesignationsComponent } from './first-page/sidebar/designations/designations.component';
import { SkillsComponent } from './first-page/sidebar/skills/skills.component';
import { ShiftingInfoComponent } from './first-page/shifting-info/shifting-info.component';
import { ShiftingNavbarComponent } from './first-page/shifting-info/shifting-navbar/shifting-navbar.component';
import { ShiftingTableComponent } from './first-page/shifting-info/shifting-table/shifting-table.component';
import { ShiftingEmployeeComponent } from './first-page/shifting-info/shifting-table/shifting-employee/shifting-employee.component';
import { HeaderSecondComponent } from './second-page/header-second/header-second.component';
import { SidebarSecondComponent } from './second-page/sidebar-second/sidebar-second.component';
import { HaziraTableComponent } from './second-page/hazira-table/hazira-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderNavbarComponent,
    SidebarComponent,
    CalendarComponent,
    EmployeesComponent,
    BranchComponent,
    DesignationsComponent,
    SkillsComponent,
    ShiftingInfoComponent,
    ShiftingNavbarComponent,
    ShiftingTableComponent,
    ShiftingEmployeeComponent,
    HeaderSecondComponent,
    SidebarSecondComponent,
    HaziraTableComponent
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
