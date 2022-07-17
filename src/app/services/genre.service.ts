import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  apiUrl:string="https://api.jikan.moe/v4/genres/anime";

  constructor(private httpclient:HttpClient) { }

  getGenres():Observable<ListResponseModel<Genre>>{
    return this.httpclient.get<ListResponseModel<Genre>>(this.apiUrl);
  }
}
