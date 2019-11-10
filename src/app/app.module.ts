import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {FilmsComponent} from "./films/films.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, FilmsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
