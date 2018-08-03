import { Component, OnInit, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { SearchItemComponent } from '../search-item/search-item.component';
import { CONFIG_SERVICE } from '../../config-service';
import { Config } from '../../config';
import { config } from 'rxjs';


@Component({
  selector: 'search-router',
  templateUrl: './search-router.component.html',
  styleUrls: ['./search-router.component.css']
})

export class SearchRouterComponent implements OnInit {


  filmsData: Film[];
  searchedFilm: string;
  pageFilms: number = 1;
  searchedWord: string = "";


  searchFilmsOneCicle() {
    this.filmsService.getSearchFilms(this.searchedFilm, this.pageFilms).subscribe((filmList: any) => {
      filmList.results.map((result) => {
        this.filmsService.films.push({

          id: result.id,
          isFavorite: false,

          title: result.title,
          popularity: result.popularity,
          release_date: result.release_date,
          overview: result.overview.slice(0, 130),
          poster_path: `${this.configService.midImgPath}${result.poster_path}`

        })
      })
      this.filmsData = this.filmsService.getFilms();
    })
  }

  constructor(@Inject(CONFIG_SERVICE) public configService: Config, public filmsService: FilmService) { }

  searchFilms() {
    if ((this.searchedFilm.length >= 3) && !(this.searchedFilm === this.searchedWord)) {
      this.filmsService.films = [];
      this.searchFilmsOneCicle();
      this.searchedWord = this.searchedFilm;
    } else {
      if (this.searchedFilm.length >= 3) {
        this.searchFilmsOneCicle();
      }
    }
  }
  setPagingFilms() {
    this.pageFilms++;
    this.searchFilms();

  }

  ngOnInit() { }
}
