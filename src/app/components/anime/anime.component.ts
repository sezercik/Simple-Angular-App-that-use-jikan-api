import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  animes: Anime[] = [];
  dataLoaded = false;
  // animeResponseModel:AnimeResponseModel={
  //   data: this.animes
  // };

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes() {
    this.animeService
      .getAnimes()
      .subscribe((response) => (this.animes = response.data));
    this.dataLoaded = true;
  }
}
