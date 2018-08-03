import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Input() acter: Actor;
  @Input() counter: number;
  @Output('star') starEmitter = new EventEmitter<Film>();

  constructor() {
  }
  loading: boolean = true
  onLoad() {
    this.loading = false;
  }
  ngOnInit() { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("Hook Child, Проперти в дочернем компоненте поменялись");
  //   console.dir(changes);
  //   for (let key in changes) {
  //     console.log(`ключ = ${key}`)
  //     console.log(`            текущее значение = `);
  //     console.dir(changes[key].currentValue)
  //     console.log(`            предыдущее значение = `)
  //     console.dir(changes[key].previousValue)
  //   }
  // }

  // ngAfterContentInit() {
  //   console.log("Hook Child, Внешний контент установлен в дочерний компонент");
  // }


  starFilm(film: Film) {
    this.starEmitter.emit(film);
  }

  // showFilmInfo() {
  //   console.log(this.film);
  //   return true;
  // }

}
