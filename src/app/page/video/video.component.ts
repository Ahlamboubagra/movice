import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
  videos: any[] = []

  ngOnInit(): void {
this.route.parent?.params.subscribe((params: any) => {
  this.getVidioes(params.id)
})
  }
  getVidioes(id:number){
    this.movieService.getvidotMovies(id).subscribe(({result}:any) =>{

   this.videos = result
    })

}
}
