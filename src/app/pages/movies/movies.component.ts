import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  implements OnInit {
  query: string = ""
  upPopularMovies: any[]=[]

  constructor(private movieService:MovieService ){}

  ngOnInit(): void {
    this.getPopular();
  }

  SearchMovie(){
    if(this.query){
      this.movieService.getserchMovies(this.query).subscribe(({results}:any)=>{
        this.upPopularMovies = results
      })
      return
    }
    this.upPopularMovies


  }
  getPopular( page: number = 1){
    this.movieService.getMovies('popular',page).subscribe((data:any)=>{
      this.upPopularMovies = data.results;
    })
  }


  paginate(event:any) {
this.getPopular(event.page+1)
  }



}
