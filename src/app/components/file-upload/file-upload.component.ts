import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private _file: File;
  private _fileReader: FileReader = new FileReader();

  // @TODO: remove this test of the json parsing
  public characterJson;

  constructor(private _characterService: CharacterService) {
    // @TODO: remove this test of the json parsing
    this._characterService.characterData$.subscribe( character => {
      this.characterJson = JSON.stringify(character, null, 2);
    });
  }

  get file() {
    return this._file;
  }

  set file(file) {
    this._file = file;
  }

  get fileReader() {
    return this._fileReader;
  }

  fileUpload(files) {
    // if file doesn't exist abort
    if( !files || !files[0] ) {
      console.warn('No file uploaded');
      return;
    }

    this.file = files[0];

    // very simple check for chummer file type
    if( !this.file.name.endsWith('.chum5') ) {
      console.error('Not a chummer file');
      return;
    }

    // when reading is complete this will fire event listener "loadend"
    this.fileReader.readAsText(this.file);
  }

  ngOnInit() {
    this.fileReader.addEventListener("loadend", () => this._characterService.parseXml(this.fileReader.result) );
  }
}
