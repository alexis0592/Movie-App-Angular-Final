import { Component, OnInit, Input } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Movie } from '../../models/movie.model';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  providers:[MovieService]
})
export class MoviesDetailComponent implements OnInit {

  @Input() movie:Movie;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  deleteMovie(id:string){
    this.movieService.removeMovie(id)
      .subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.error('Error guardando pelicula' + error);
            }
      );
  }

}
