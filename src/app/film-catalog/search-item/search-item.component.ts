import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { Film } from '../../film';
import { Actor } from '../../actor';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
    @Input() film: Film;
    @Input() acter: Actor;
    @Input() counter: number;
    //@Output('star') starEmitter = new EventEmitter<Film>();

    constructor() {
    }
    ngOnInit() { }
}