import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "35cdda3651430d0dd4f856bd7df11a21"


  constructor(private http: HttpClient) { }

  getMovies(option: string, page: number = 1){
    return this.http.get(`${this.baseUrl}/movie/${option}?page=${page}&api_key=${this.apiKey}`);
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getCreditMovies(id: number) {

    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)

  }
  getImgtMovies(id: number) {

    return this.http.get(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)


  }
  getvidotMovies(id: number) {

    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)

  }
  getserchMovies(query: string) {

    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`)

  }



  getTVpopular() {

    return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`)

  }
  getTV(id: number) {

    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)

  }
  getSimiltv( id: number){
    return this.http.get(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
  }

  getvidetv(id: number) {

    return this.http.get(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)

  }
  getCredittv(id: number) {

    return this.http.get(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`)

  }
  getImgtv(id: number) {

    return this.http.get(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`)


  }
  getgenretv() {

    return this.http.get(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`)


  }
  getgenremovie() {

    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)


  }
  gettrending() {

    return this.http.get(`${this.baseUrl}/trending/all/day?page=5&api_key=${this.apiKey}`)


  }

  getActionMovies(id: number, page: number = 1){
    return this.http.get(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}&with_genre=${id}`);
  }


}
