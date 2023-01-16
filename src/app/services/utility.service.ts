import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  downloadFileFromUrl(url: string) {
    return this.httpClient.post(environment.base_url + "protected/profile/get/file", {"link": url}, {responseType: 'arraybuffer'});
  }

  downloadAndInsert(element: any): Observable<any> {
    const subject = new Subject<any>;
    this.downloadFileFromUrl(element.link).subscribe(result => {
      const file = new File([result], element.name, {type: element.type});
      subject.next(this.createImageFromBlob(result, file));
    });
    return subject.asObservable();
  }

  createSanitizedImageFromBlob(image: ArrayBuffer, imageType: string) {
    return this.sanitize('data:image/' + imageType + ';base64, ' + this._arrayBufferToBase64(image));
  }

  createImageFromBlob(image: ArrayBuffer, file: File) {
    let imageType = file.name.includes("png") ? "png" : "jpeg";
    let link = this.createSanitizedImageFromBlob(image, imageType);
    return {name: file.name, type: file.type, size: file.size, link: link, file:file};
  }

  private _arrayBufferToBase64(data: ArrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(data);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
