import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }
  
  public uploadImage($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + name);
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error));
  }

  getImages(){
    const imageRef = ref(this.storage, 'imagen');
    list(imageRef)
    .then(async (response) => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);        
      }      
    })
    .catch(error => console.log(error));
  }

  public uploadProyectoImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'proyectoImg/' + name);
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error));
  }

  getProyectoImg() {
    const imagesRef = ref(this.storage, 'proyectoImg');
    list(imagesRef)
    .then(async (response) => {
       for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log('La URL es: ' + this.url);
      }
    })
    .catch(error => console.log(error));
  }

}
 