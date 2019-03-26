import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './views/show/show.component';
import { ShowsComponent } from './views/shows/shows.component';
import { HistoryComponent } from './views/history/history.component';

const routes: Routes = [
  {path: 'show/:id', component: ShowComponent},
  {path: 'search/:query', component: ShowsComponent},
  {path: 'history', component: HistoryComponent},
  {path: '**', redirectTo: '/'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
