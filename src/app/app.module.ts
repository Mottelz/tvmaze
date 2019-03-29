import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { ShowsComponent } from './views/shows/shows.component';
import { ShowComponent } from './views/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { StripPipe } from './controllers/strip.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SafePipe } from './controllers/safe.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { SeasonComponent } from './views/season/season.component';
import { MatSortModule } from '@angular/material';
import { EpisodeNumberFormatterPipe } from './controllers/episode-number-formatter.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HistoryComponent } from './views/history/history.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowsComponent,
    ShowComponent,
    StripPipe,
    SafePipe,
    SeasonComponent,
    EpisodeNumberFormatterPipe,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatExpansionModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSortModule,
    MatTooltipModule,
    MatListModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
