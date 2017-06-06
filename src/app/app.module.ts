import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CharacterService } from './services';

import { AppComponent } from './app.component';

import {
  CharacterDetailComponent,
  FileUploadComponent,
  NameComponent,
  NavbarComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    FileUploadComponent,
    NameComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
