import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements   OnInit{
  sidebarVisible1:boolean=false
  CategorieMovies: any[] = []
  ClickMovie : any []=[]
  trid: any [] =[]
  id:number=0
  constructor(private movieService:MovieService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getPopular(),
    this.getcategorie()



}


getPopular(page:number=1) {
  this.movieService.getMovies("popular",page).subscribe((data: any) => {

    this.ClickMovie = data.results
    console.log('popular', data.results)
  })}


  getcategorie() {
    this.movieService.getgenremovie().subscribe(({genres}: any) => {

      this.CategorieMovies = genres
      console.log('categorie', genres)
    })
  }





}

