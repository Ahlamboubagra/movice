import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonModule } from 'ngx-skeleton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ImagesComponent } from './pages/images/images.component';
import { VieoComponent } from './page/vieo/vieo.component';
import { VideoComponent } from './page/video/video.component';
import { PaginatorModule } from 'primeng/paginator';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { VidesComponent } from './components/vides/vides.component'
import { FormsModule } from '@angular/forms';
import { ShowtvComponent } from './showtv/showtv.component';
import { SlidetvComponent } from './slidetv/slidetv.component';
import { SimlComponent } from './siml/siml.component';
import { ActorComponent } from './actor/actor.component';
import { ImgComponent } from './img/img.component';
import { VideComponent } from './vide/vide.component';
import { YoutComponent } from './yout/yout.component';
import { ActoresComponent } from './actores/actores.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { GenerComponent } from './gener/gener.component';
import { GenretvComponent } from './genretv/genretv.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidcatComponent } from './slidcat/slidcat.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowMovieComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    VieoComponent,
    VideoComponent,

    YoutubeComponent,
     VidesComponent,
     ShowtvComponent,
     SlidetvComponent,
     SimlComponent,
     ActorComponent,
     ImgComponent,
     VideComponent,
     YoutComponent,
     ActoresComponent,
     SkeletonComponent,
     GenerComponent,
     GenretvComponent,
     SlidcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    NgxSkeletonModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
