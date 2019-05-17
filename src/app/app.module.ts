import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NsTableComponent } from './ns-table/ns-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AppTopnavComponent } from './app-topnav/app-topnav.component';
import { AppRadioButtonComponent } from './app-radio-button/app-radio-button.component';
import { AppFormComponent } from './app-form/app-form.component';
import { AppContainersComponent } from './app-containers/app-containers.component';
import { AppListGroupComponent } from './app-list-group/app-list-group.component';
import { AppCardsComponent } from './app-cards/app-cards.component';
import { AppDialogsComponent } from './app-dialogs/app-dialogs.component';
import { AppTableComponent } from './app-table/app-table.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppTextboxComponent } from './app-textbox/app-textbox.component';


@NgModule({
  declarations: [
    AppComponent,
    NsTableComponent,
    MyDashboardComponent,
    AppTopnavComponent,
    AppRadioButtonComponent,
    AppFormComponent,
    AppContainersComponent,
    AppListGroupComponent,
    AppCardsComponent,
    AppDialogsComponent,
    AppTableComponent,
    AppButtonComponent,
    AppTextboxComponent
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
    },
    {
      path: 'button',
      component: AppButtonComponent
    },
    {
      path: 'card',
      component: AppCardsComponent
    },
    {
      path: 'container',
      component: AppContainersComponent
    },
    {
      path: 'dialog',
      component: AppDialogsComponent
    },
    {
      path: 'form',
      component: AppFormComponent
    },
    {
      path: 'listgroup',
      component: AppListGroupComponent
    },
    {
      path: 'table',
      component: AppTableComponent
    },
    {
      path: 'textbox',
      component: AppTextboxComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
