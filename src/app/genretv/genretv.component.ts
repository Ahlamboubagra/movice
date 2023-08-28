import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-genretv',
  templateUrl: './genretv.component.html',
  styleUrls: ['./genretv.component.css']
})
export class GenretvComponent implements OnInit {

  tv: any[] = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

     this.getgenre()


  }

  getgenre( ){
    this.movieService.getgenretv().subscribe((data:any)=>{
      this.tv = data.results;
    })
  }
}

