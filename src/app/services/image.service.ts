import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { getDownloadURL, list, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  constructor(private storage: Storage ) { }

  public uploadImage($event:any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/'+name)
    uploadBytes(imgRef, file)
    .then( async response => {
      this.url = await getDownloadURL(imgRef)
    console.log("subido / url = "+ this.url)})
    .catch( error => console.log(error))
  }
}
