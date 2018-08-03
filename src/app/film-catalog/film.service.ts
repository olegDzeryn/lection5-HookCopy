import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Film } from '../film';
import { Actor } from '../actor';
import { Config } from '../config'
import { SortOption } from '../sort-option';
import { HttpClient } from '@angular/common/http';
import { CONFIG_SERVICE } from '../config-service';


@Injectable({
  providedIn: 'root'
})
export class FilmService {



  films: Film[] = [];
  actors: Actor[] = [];



  constructor(private http: HttpClient,
    @Inject(CONFIG_SERVICE) public configService: Config) { }

  getActors() {
    return this.actors;
  }
  getFilms() {
    return this.films;
  }

  getPopularFilms(page?: number) {
    return this.http.get(`${this.configService.movieUrl}/popular?page=${page}${this.configService.params}`)
  }
  getPopularActor(page?: number) {
    return this.http.get(`${this.configService.personUrl}/popular?page=${page}${this.configService.params}`)
  }
  getSearchFilms(searchedFilm: string, page?: number) {
    return this.http.get(`${this.configService.searchUrl}/movie?&query=${searchedFilm}${this.configService.params}&page=${page}&include_adult=false`)
  }
}
