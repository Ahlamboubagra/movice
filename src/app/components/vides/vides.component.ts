import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-vides',
  templateUrl: './vides.component.html',
  styleUrls: ['./vides.component.css']
})
export class VidesComponent implements OnInit {
  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
  videos: any[] = []

  ngOnInit(): void {
this.route.parent?.params.subscribe((params: any) => {
  this.getVidio(params.id)
})
  }
  getVidio(id:number){
    this.movieService.getvidotMovies(id).subscribe(({results}:any) =>{

   this.videos = results
   console.log("ahlam",results)
    })

}


}
