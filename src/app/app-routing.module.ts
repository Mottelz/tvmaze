import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowComponent} from './views/show/show.component';
import {ShowsComponent} from './views/shows/shows.component';

const routes: Routes = [
  {path: 'show/:id', component: ShowComponent},
  {path: 'search/:query', component: ShowsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
