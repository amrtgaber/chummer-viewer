import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private _filename: string;

  constructor() {
    this._filename = '';
  }

  get filename() {
    return this._filename;
  }

  set filename(newFilename) {
    this._filename = newFilename;
  }

  fileUpload(event) {
    let files = event.srcElement.files;
    console.log(files);
    this.filename = files[0].name;
  }

  ngOnInit() {
  }

}
