import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manga } from '../models/manga';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  apiUrl:string="https://api.jikan.moe/v4/manga";

  constructor(private httpclient:HttpClient) { }

  getMangas():Observable<ListResponseModel<Manga>>{
    return this.httpclient.get<ListResponseModel<Manga>>(this.apiUrl);
  }
}
