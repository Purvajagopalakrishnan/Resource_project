import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', component: LoginComponent},
  {path: 'resourcelist', component: ResourceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
