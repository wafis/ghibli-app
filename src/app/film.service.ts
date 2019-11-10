import {Injectable} from "@angular/core";
import {Film} from "./film";
// import {FILMS} from "./mock-films";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  private filmsUrl = "https://ghibliapi.herokuapp.com/films";
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }
}
