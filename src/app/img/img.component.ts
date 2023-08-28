import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit{
  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
  imges: any[] = []



  ngOnInit(): void {
    this.route.parent?.params.subscribe((data: any) => {
      console.log('param', data.id)
      this.getimgetv(data.id)
    })

  }

  getimgetv(id: number) {
    this.movieService.getImgtv(id).subscribe((data: any) => {

      this.imges = data.backdrops;

    })
  }

}
