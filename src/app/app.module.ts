import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NsTableComponent } from './ns-table/ns-table.component';

RouterModule.forRoot([
  {
    path: 'table',
    component: NsTableComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    NsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
