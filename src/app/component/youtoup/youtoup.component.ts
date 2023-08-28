import { Component , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-youtoup',
  templateUrl: './youtoup.component.html',
  styleUrls: ['./youtoup.component.css']
})
export class YoutoupComponent {
  constructor(private senitizer: DomSanitizer) {}

  @Input() key: string =""
  @Input() title: string =""

  saveUrl(key:string){
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }




}
