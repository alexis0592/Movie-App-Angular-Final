import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {

  movieSelected:Movie;

  constructor() {
   }

  ngOnInit() {
    
  }

  selectedMovie(event:any){
    this.movieSelected = event;
    console.log(event);
  }

}
