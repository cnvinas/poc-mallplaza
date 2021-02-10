import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MockService } from './services/mock-service.service';
import { PageNumber } from './pipes/pageNumber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftMenuComponent,
    NavbarComponent,
    MainTableComponent,
    PageNumber
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
