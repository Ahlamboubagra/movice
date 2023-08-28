import { GenretvComponent } from './genretv/genretv.component';
import { GenerComponent } from './gener/gener.component';
import { ActoresComponent } from './actores/actores.component';
import { VideoComponent } from './page/video/video.component';
import { ImagesComponent } from './pages/images/images.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VidesComponent } from './components/vides/vides.component';
import { ShowtvComponent } from './showtv/showtv.component';
import { SimlComponent } from './siml/siml.component';
import { VideComponent } from './vide/vide.component';
import { ImgComponent } from './img/img.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent,
    children: [
      {
        path: 'similar',
        component:SimilarComponent
      },
      {
        path: 'actors',
        component: ActorsComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'video',
        component: VidesComponent
      }
    ]
  },
  {
    path: "tv",
    component: TvComponent
  },
  {
    path: "tv/:id",
    component: ShowtvComponent,
    children: [
      {
        path: 'siml',
        component:SimlComponent
      },
      {
        path: 'actors',
        component: ActoresComponent
      },
      {
        path: 'img',
        component: ImgComponent
      },
      {
        path: 'vide',
        component: VideComponent
      }
    ]


  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "genrer/:id/:name",
    component: GenerComponent
  },
  {
    path: "gentv/:id/:name",
    component: GenretvComponent
  },




  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
