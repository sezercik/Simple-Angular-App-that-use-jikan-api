import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { Location } from '@angular/common';
import { ResponseModel } from 'src/app/models/responseModel';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  anime:ResponseModel;

  constructor(private animeService:AnimeService,private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime():void{
    const id = +this.route.snapshot.params['id'];
    this.animeService.getAnime(id).subscribe((anime) => (this.anime = anime));
  }

  goBack():void{
    console.log(this.location);
    this.location.back();
  }
}
