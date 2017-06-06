import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { CharacterService } from './services';

import { AppComponent } from './app.component';

import {
  FileUploadComponent,
  NameComponent,
  CharacterDetailComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NameComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
