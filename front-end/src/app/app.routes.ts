import { Routes } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDescriptionComponent } from './beer-description/beer-description.component';
import { AddbeersComponent } from './addbeers/addbeers.component';

const ROUTES: Routes = [
  { path: 'beers', component: BeerListComponent },
  { path: 'description/:id', component: BeerDescriptionComponent },
  { path: 'new-beer', component: AddbeersComponent },
];

export { ROUTES };
