import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-yout',
  templateUrl: './yout.component.html',
  styleUrls: ['./yout.component.css']
})
export class YoutComponent {
  constructor(private senitizer: DomSanitizer) {}

  @Input() key: string =""
  @Input() title: string =""

  saveUrl(key:string){
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }

}
