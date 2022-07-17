import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { GenreComponent } from './components/genre/genre.component';
import { AnimeComponent } from './components/anime/anime.component';
import { MangaComponent } from './components/manga/manga.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenredetailComponent } from './components/genredetail/genredetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    GenreComponent,
    AnimeComponent,
    MangaComponent,
    AnimeDetailComponent,
    DashboardComponent,
    GenredetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
