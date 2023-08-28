import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slidetv',
  templateUrl: './slidetv.component.html',
  styleUrls: ['./slidetv.component.css']
})
export class SlidetvComponent {
  @Input() items: any[] = []
}
