import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {


  trid: any[] = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

     this.getPopular()


  }

  getPopular( ){
    this.movieService.gettrending().subscribe((data:any)=>{
      this.trid = data.results;
    })
  }
}



