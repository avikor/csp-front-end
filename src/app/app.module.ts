// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';


// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PythagoreanTriplesComponent } from './components/tabs/pythagorean-triples/pythagorean-triples.component';
import { MagicSquareComponent } from './components/tabs/magic-square/magic-square.component';
import { NQueensComponent } from './components/tabs/n-queens/n-queens.component';
import { HomeTabComponent } from './components/tabs/home-tab/home-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    MainLayoutComponent,
    PythagoreanTriplesComponent,
    MagicSquareComponent,
    NQueensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
