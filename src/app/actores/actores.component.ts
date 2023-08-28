import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit  {

  constructor(private movieService: MovieService,private route: ActivatedRoute) {}
actors: any[] = []
Title:any;
  ngOnInit(): void {
this.route.parent?.params.subscribe((params: any) => {
  this.getActorstv(params.id)
})
  }
  getActorstv(id:number){
    this.movieService.getCredittv(id).subscribe(({cast}:any) =>{
    this.actors = cast
    console.log(cast)
    })

}
}
