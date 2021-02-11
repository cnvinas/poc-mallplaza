import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { LeftMenuComponent } from '../shared/components/left-menu/left-menu.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MainTableComponent } from '../shared/components/main-table/main-table.component';
import { MockService } from '../shared/services/mock-service.service';
import { PageNumber } from '../shared/pipes/pageNumber.pipe';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
