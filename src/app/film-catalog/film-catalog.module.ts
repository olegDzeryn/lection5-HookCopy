import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { SearchRouterComponent } from './search-router/search-router.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { ActorItemComponent } from './actor-item/actor-item.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { FilmItemComponent } from './film-item/film-item.component';
//import { SearchComponent } from './search/search.component';
import { Sort } from './sort/sort.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchItemComponent } from './search-item/search-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MainComponent,
    FilmsListComponent,
    FilmItemComponent,
    SearchItemComponent,
    // SearchComponent,
    SearchRouterComponent,
    Sort,
    ActorItemComponent
  ]
})
export class FilmCatalogModule {
}
