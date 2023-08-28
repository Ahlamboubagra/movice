import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {

  constructor(private senitizer: DomSanitizer) {}

  @Input() key: string =""
  @Input() title: string =""

  saveUrl(key:string){
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }
}
