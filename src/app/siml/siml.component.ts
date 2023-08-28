import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-siml',
  templateUrl: './siml.component.html',
  styleUrls: ['./siml.component.css']
})
export class SimlComponent {
  similatv: any[] = []
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getSimilr(params.id)
    })

  }

  getSimilr(id: number) {
    this.movieService. getSimiltv(id).subscribe(({results}: any) => {
      this.similatv = results
      console.log('similar', results)
    })
  }


}
