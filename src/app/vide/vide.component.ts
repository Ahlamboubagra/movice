import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-vide',
  templateUrl: './vide.component.html',
  styleUrls: ['./vide.component.css']
})
export class VideComponent implements OnInit {

  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
  videos: any[] = []

  ngOnInit(): void {
this.route.parent?.params.subscribe((params: any) => {
  this.getVidi(params.id)
})
  }
  getVidi(id:number){
    this.movieService.getvidetv(id).subscribe(({results}:any) =>{

   this.videos = results
   console.log(results)
    })

}

}
