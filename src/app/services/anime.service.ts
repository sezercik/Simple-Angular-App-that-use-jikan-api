import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Anime } from '../models/anime';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl:string="https://api.jikan.moe/v4/anime";

  constructor(private httpclient:HttpClient) { }

  getAnimes():Observable<ListResponseModel<Anime>>{
    return this.httpclient.get<ListResponseModel<Anime>>(this.apiUrl);
  }

  getNextAnimes(apiNum:number):Observable<ListResponseModel<Anime>>{
    return this.httpclient.get<ListResponseModel<Anime>>(this.apiUrl+"/"+apiNum+"/full");
  }

  getAnime(id:number):Observable<ResponseModel>{
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.httpclient.get<ResponseModel>(url).pipe();
  }
}
