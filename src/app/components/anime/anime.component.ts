import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'ngx-pagination';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';
import { PaginationInfoService } from 'src/app/services/pagination-info.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent implements OnInit {
  animes: Anime[] = [];
  p:number = 1;
  count:number = 25;
  maxCount:number;
  dataLoaded = false;
  pId:number;
  apiNum:number;
  // animeResponseModel:AnimeResponseModel={
  //   data: this.animes
  // };

  constructor(private animeService: AnimeService,private paginationInfoService:PaginationInfoService) {}

  ngOnInit(): void {
    this.getAnimes();
    // this.getNextAnimes(this.p);
    this.getPaginationCount()
  }

  getPaginationCount() {
    this.paginationInfoService
      .getPagination()
      .subscribe((response) => {
        this.maxCount = response.pagination.last_visible_page;
      });
  }

  getAnimes() {
    this.animeService
      .getAnimes()
      .subscribe((response) => {
        (this.animes = response.data)
      });
    this.dataLoaded = true;
  }

  getNextAnimes(pr:number) {
    this.animeService
      .getNextAnimes(pr)
      .subscribe((response) => {
        (this.animes = response.data)
      });
    this.dataLoaded = true;
  }

  handlePageChange(event: number) {
    this.getNextAnimes(event);
  }

}
