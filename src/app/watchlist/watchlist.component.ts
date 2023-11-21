import { Component, ViewChild} from '@angular/core';
import { FilmService } from '../shared/film/film.service';
import { NgForm } from '@angular/forms';
import { Film } from '../shared/film/film.model';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent{
  @ViewChild('filmForm') filmForm!: NgForm;
  showModal = false;
  myFilms = this.filmService.getFilms()

  constructor(private filmService: FilmService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newFilm: Film = form.value;
      this.filmService.addFilm(newFilm);
      // Reset
      form.resetForm();
      this.closeFilmModal();
    }
  }

  openFilmModal(): void {
    this.showModal = true;
  }

  closeFilmModal(): void {
    this.showModal = false;
    this.filmForm.resetForm();}

    selectedFilm: any = null;

  toggleDetails(film: any): void {
    if (this.selectedFilm === film) {
      this.selectedFilm = null;
    } else {
      this.selectedFilm = film;
    }
  }

  isDetailsVisible(film: any): boolean {
    return this.selectedFilm === film;
  }

  removeFilm(): void {
    if (this.selectedFilm) {
      const index = this.myFilms.indexOf(this.selectedFilm);
      if (index !== -1) {

        this.myFilms.splice(index, 1);

        this.selectedFilm = null;
      }
    }
  }


}
