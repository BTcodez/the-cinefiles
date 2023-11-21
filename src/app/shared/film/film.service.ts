import { Injectable } from '@angular/core';
import { Film } from './film.model';
import { EventEmitter } from '@angular/core';
import { WatchlistStorageService } from 'src/app/watchlist/watchlist-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  selectedFilm = new EventEmitter

  myFilms: Film[] = [
    { title: 'Inception',
    director: 'Christopher Nolan',
    releaseDate: 2014,
    genre: 'Sci-Fi',
    coverUrl: 'https://www.themoviedb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
  },
    { title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    releaseDate: 1994,
    genre: 'Drama',
    coverUrl: 'https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg'
  },
    { title: 'Scream 6',
      director: 'Tyler Gillett, Matt Olpin',
      releaseDate: 2023,
      genre: 'Horror',
      coverUrl: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2023/02/scream-poster-1.png?ssl=1',
    },
    { title: 'Brick',
      director: 'Rian Johnson',
      releaseDate: 2005,
      genre: 'Suspense',
      coverUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eff9ba2a-f21a-4313-8be3-d9e784d1b0e5/dbpggz5-037a5d19-4419-417f-bf75-f959889a8c41.png/v1/fill/w_763,h_1048,q_70,strp/brick__2005__movie_poster_hd_by_mephisto_dcix_dbpggz5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwNiIsInBhdGgiOiJcL2ZcL2VmZjliYTJhLWYyMWEtNDMxMy04YmUzLWQ5ZTc4NGQxYjBlNVwvZGJwZ2d6NS0wMzdhNWQxOS00NDE5LTQxN2YtYmY3NS1mOTU5ODg5YThjNDEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lWrTgl5ksGrwvh6CGITsFzMfgjgtNXBPvasryJQPKHk',
    }
  ];


  getFilms(): Film[] {
    return this.myFilms;

}

  addFilm(newFilm: Film): void {
    this.myFilms.push(newFilm);
}

}
