import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
actors: any[] = []
Title:any;
  ngOnInit(): void {
this.route.parent?.params.subscribe((params: any) => {
  this.getActors(params.id)
})
  }
  getActors(id:number){
    this.movieService.getCreditMovies(id).subscribe(({cast}:any) =>{
    this.actors = cast
    console.log(cast)
    })

}
}
