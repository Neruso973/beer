import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [AppComponent, BeerListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
