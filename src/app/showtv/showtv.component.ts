import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-showtv',
  templateUrl: './showtv.component.html',
  styleUrls: ['./showtv.component.css']
})
export class ShowtvComponent {
  tv: any = {}


  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      this.getOnetv(params.id)
    })

  }

  getOnetv(id: number) {
    this.movieService.getTV(id).subscribe((response: any) => {
      this.tv = response
      console.log(response)
    })
  }

}

