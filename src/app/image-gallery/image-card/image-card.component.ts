import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageCardComponent implements OnInit {

  @Input()
  src = '';
  constructor() { }

  ngOnInit(): void {
  }

}
