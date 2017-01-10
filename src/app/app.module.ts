import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CharacterService } from './services';

import { AppComponent } from './app.component';

import {
  FileUploadComponent,
  NameComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NameComponent
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
