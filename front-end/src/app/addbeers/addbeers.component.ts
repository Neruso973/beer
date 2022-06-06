import { Component, OnInit } from '@angular/core';
import { Beer } from '../data/Beer';

@Component({
  selector: 'app-addbeers',
  templateUrl: './addbeers.component.html',
  styleUrls: ['./addbeers.component.scss'],
})
export class AddbeersComponent implements OnInit {
  model: Beer = new Beer();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.model);
  }
}
