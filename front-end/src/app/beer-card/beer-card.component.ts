import { Component, Input, OnInit } from '@angular/core';
import { beers } from '../data/interfaces';
import { Beer } from '../data/Beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() beer: beers = new Beer();

  constructor() {}

  ngOnInit(): void {}
}
