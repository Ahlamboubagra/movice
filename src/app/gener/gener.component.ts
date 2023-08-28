import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-gener',
  templateUrl: './gener.component.html',
  styleUrls: ['./gener.component.css']
})
export class GenerComponent implements OnInit {

  @Input() items: any[] = []
  sidebarVisible1:boolean=false
  CategorieMovies: any[] = []
  ClickMovie : any []=[]
  id:number=0
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.getypemovie(params.id)
      console.log(params.id)


  })
}

  getypemovie(id:number,page:number=1){
    this.movieService.getActionMovies(id,page).subscribe(({results}: any)=>{
    this.ClickMovie=results
    console.log("type" ,results)
  })

}

paginate(eventgfd:any){
  console.log(eventgfd)
  this.getypemovie(this.id,eventgfd.page+1)
}
}
