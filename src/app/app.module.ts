import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { MaterialModule } from '@angular/material'

import { StoreModule } from '@ngrx/store'
import { listaReducer } from './reducers/lista.reducer'

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ListaComponent } from './lista/lista.component';
import { NewListFormComponent } from './new-list-form/new-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    ListaComponent,
    NewListFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({
      listas: listaReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
