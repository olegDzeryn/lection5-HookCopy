import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCatalogModule } from './film-catalog/film-catalog.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//import { config } from 'rxjs';
import { configService, CONFIG_SERVICE } from './config-service';
import { Config } from './config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilmCatalogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [Config,
    { provide: CONFIG_SERVICE, useValue: configService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

