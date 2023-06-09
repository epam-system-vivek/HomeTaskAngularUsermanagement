import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'deleted', component: DeletedComponent },
  { path: 'manage', component: ManageComponent },
  { path: '**', redirectTo: '' }, // handle invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
