import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // para el get
import 'rxjs/add/operator/do'; // para el get
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

  private serviceURL = 'https://capacitacion-angular.herokuapp.com/';
  private movieEndPoint = 'movies';

  constructor(private http:Http) { }

  getMovies():Observable<Movie[]>{
    return this.http.get(this.serviceURL + this.movieEndPoint)
      .map((response:Response) => <Movie[]> response.json()) // llamando el .json en la respuesta para retornar los datos
      .do(data => console.log(JSON.stringify(data)));
  }

  addMovie(body: Object): Observable<Movie>{
    let bodyString = JSON.stringify(body);
    // let headers = new Headers({'Content-Type': 'application/json'});
    let headers = new Headers({});
    let options = new RequestOptions({headers : headers});
    headers.append('Content-Type', 'application/json');

    let urlPOST = this.serviceURL + this.movieEndPoint;

    return this.http.post('https://capacitacion-angular.herokuapp.com/movies', body, options)
      .map((response:Response) => console.log(response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  removeMovie(id:string):Observable<void>{

  let urlDelete = this.serviceURL + this.movieEndPoint + '/' + id;

    return this.http.delete(urlDelete)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
