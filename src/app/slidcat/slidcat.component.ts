import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slidcat',
  templateUrl: './slidcat.component.html',
  styleUrls: ['./slidcat.component.css']
})
export class SlidcatComponent {
  @Input() items: any[] = []
}
