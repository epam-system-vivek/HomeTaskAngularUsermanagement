import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';
import { ManageComponent } from './manage/manage.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    DeletedComponent,
    ManageComponent,
    HomeComponent,
    UserComponent,

    UsersListComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
