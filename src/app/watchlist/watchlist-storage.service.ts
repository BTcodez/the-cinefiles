import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from '../shared/film/film.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistStorageService {

  constructor(private http: HttpClient, private FilmService: FilmService) { }

  storeFilms() {
    const myFilms = this.FilmService.getFilms();
    this.http.put('https://cinefiled-dbaa5-default-rtdb.firebaseio.com/watchlist.json', myFilms)
    .subscribe(Response);
  }
}
