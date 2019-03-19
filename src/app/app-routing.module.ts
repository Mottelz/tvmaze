import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowComponent} from './views/show/show.component';

const routes: Routes = [
  {path: 'show/:id', component: ShowComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
