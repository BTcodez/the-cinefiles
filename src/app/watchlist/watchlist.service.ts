import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from '../shared/film/film.service';
import { tap } from 'rxjs';
import { Film } from '../shared/film/film.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  firebaseRootUrl = "https://cinefiled-dbaa5-default-rtdb.firebaseio.com/";

  constructor(
    private http: HttpClient,
    private filmService: FilmService
    ) {}

  saveFilms() {
    const films = this.filmService.getFilms();

    this.http.put(this.firebaseRootUrl, films).subscribe(res => {
      console.log('Firebase DB Response:', res);
    });
  }

  fetchFilmsFromDb() {
    return this.http
    .get(this.firebaseRootUrl, {})
    .subscribe((res: Film[] | [])) => {
      this.filmService.setFilms(res)
    }
  }
}
