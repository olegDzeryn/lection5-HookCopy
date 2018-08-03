import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './film-catalog/main/main.component';
import { FilmsListComponent } from './film-catalog/films-list/films-list.component';

import { SearchRouterComponent } from './film-catalog/search-router/search-router.component';

import { InjectionToken } from '@angular/core';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "main", component: MainComponent },
  { path: "films-list", component: FilmsListComponent },
  { path: "search-router", component: SearchRouterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
