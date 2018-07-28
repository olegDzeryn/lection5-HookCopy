import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';

@Component({
    selector: 'app-actor-item',
    templateUrl: './actor-item.component.html',
    styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
    @Input() actor: Actor;
    @Input() counter: number;
    @Output('star') starEmitter = new EventEmitter<Film>();

    constructor() {
    }
    ngOnInit() { }
    // получаем ссылку на конкретный DOM элемент компонента
    //   @ViewChild("name", { read: ElementRef }) nameDiv: ElementRef;

    //   ngOnInit() {
    //     console.log("Hook Child, Инициализация дочернего компонента");
    //     // this.nameDiv.nativeElement.innerHTML = "Здесь могло быть название фильма";
    //     // console.log("Отображаем хост элемент");
    //     // console.log(this.hostElement.nativeElement.outerHTML);
    //   }

    //   ngOnChanges(changes: SimpleChanges) {
    //       console.log("Hook Child, Проперти в дочернем компоненте поменялись");
    //       console.dir(changes);
    //       for (let key in changes) {
    //           console.log(`ключ = ${key}`) 
    //           console.log(`            текущее значение = `);
    //           console.dir(changes[key].currentValue)
    //           console.log(`            предыдущее значение = `)
    //           console.dir(changes[key].previousValue)
    //       }
    //   }

    //   ngAfterContentInit() {
    //     console.log("Hook Child, Внешний контент установлен в дочерний компонент");
    //   }


    //   startFilm(film: Film) {
    //     this.starEmitter.emit(film);
    //   }

    //   showFilmInfo() {
    //     console.log(this.actor);
    //     return true;
    //   }

}
