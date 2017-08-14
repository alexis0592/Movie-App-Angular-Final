import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { MovieItemComponent } from './movies/movies-list/movie-item/movie-item.component';
import { MovieService } from "./services/movie.service";

const appRoutes:Routes = [
  {path:'Add', component:MoviesAddComponent},
  {path:'', component:MoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesDetailComponent,
    MoviesListComponent,
    MoviesAddComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
