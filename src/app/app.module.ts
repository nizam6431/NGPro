import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NsTableComponent } from './ns-table/ns-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AppTopnavComponent } from './app-topnav/app-topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    NsTableComponent,
    MyDashboardComponent,
    AppTopnavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: MyDashboardComponent
      },
    {
      path: 'table',
      component: NsTableComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
