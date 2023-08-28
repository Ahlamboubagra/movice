import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  populartv: any[] = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

     this.getPopular()


  }

  getPopular( ){
    this.movieService.getTVpopular().subscribe((data:any)=>{
      this.populartv = data.results;
    })
  }
}




