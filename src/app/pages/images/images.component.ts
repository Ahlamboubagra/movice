import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
  imges: any[] = []



  ngOnInit(): void {
    this.route.parent?.params.subscribe((data: any) => {
      console.log('param', data.id)
      this.getimge(data.id)
    })

  }

  getimge(id: number) {
    this.movieService.getImgtMovies(id).subscribe((data: any) => {

      this.imges = data.backdrops;

    })
  }


}
