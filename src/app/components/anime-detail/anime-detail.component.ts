import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime():void{
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    // this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }
}
