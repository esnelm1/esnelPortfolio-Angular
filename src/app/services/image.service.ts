import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { getDownloadURL, list, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  isUpload = false;
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/' + name)
    uploadBytes(imgRef, file)
      .then(async response => {
        this.url = await getDownloadURL(imgRef)
        console.log("subido / url = " + this.url)
        this.isUpload = true;
      })
      .catch(error => console.log(error))
  }

  public cleanIsUpload(){
    this.isUpload = false;
  }
}
