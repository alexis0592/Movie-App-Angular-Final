import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers:[MovieService]
})
export class MoviesListComponent implements OnInit {

  @Output() movieWasSelected = new EventEmitter<Movie>();

  moviesList:Movie[];
  private movieService:MovieService;

  constructor(movieService:MovieService) {
    this.movieService = movieService;
   }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(moviesList => this.moviesList = moviesList);
  }

  onMovieSelected(movie:Movie){
    this.movieWasSelected.emit(movie);
  }

}
