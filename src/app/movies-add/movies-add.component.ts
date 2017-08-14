import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css'],
  providers:[MovieService]
})
export class MoviesAddComponent implements OnInit {

  movieResponse:Movie;
  charactersArray:string[] = [];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  addNewmovie(title:HTMLInputElement, 
      format:HTMLInputElement, 
      country:HTMLInputElement, 
      duration:HTMLInputElement, 
      imageURL:HTMLInputElement,
      resume:HTMLInputElement){
        
        let durationNum:number = parseInt(duration.value);
        let movieToSave = new Movie(title.value,resume.value,format.value,country.value,durationNum,
              this.charactersArray,imageURL.value);

        this.movieService.addMovie(movieToSave)
          .subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.error('Error guardando pelicula' + error);
            }
          );
  
  }

  addCharacter(character:HTMLInputElement){
    this.charactersArray.push(character.value);
    character.value = '';
  }

}
