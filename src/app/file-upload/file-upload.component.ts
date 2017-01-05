import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private _file: File;
  private _contents: string = '';
  private _fileReader: FileReader = new FileReader();

  get file() {
    return this._file;
  }

  set file(file) {
    this._file = file;
  }

  get contents() {
    return this._contents;
  }

  set contents(contents) {
    this._contents = contents;
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

    // when reading is complete will fire event listener "loadend"
    this.fileReader.readAsText(this.file);
  }

  ngOnInit() {
    this.fileReader.addEventListener("loadend", () => {
      // @TODO: send to xml to json conversion service
      this.contents = this.fileReader.result;
    });
  }
}
