import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeResponseModel } from '../models/animeResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl:string="https://api.jikan.moe/v4/anime";

  constructor(private httpclient:HttpClient) { }

  getAnimes():Observable<AnimeResponseModel>{
    return this.httpclient.get<AnimeResponseModel>(this.apiUrl);
  }
}
