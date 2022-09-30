import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-presentation',
  templateUrl: './card-presentation.component.html',
  styleUrls: ['./card-presentation.component.scss']
})
export class CardPresentationComponent implements OnInit {
  @Input() item: any;

 constructor() { }

  ngOnInit(): void {
  }

}
