import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { OnInit } from '@angular/core';
import { per } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ImageService } from 'src/app/services/image.service';
import {  ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: per = new per("","","","");
  isLogged = false;
  isClicked = false;
  interval: any;
  localIsUpload = true;
  isErrorModificar = false;
  constructor(public personaService: PersonaService, 
              private userService: UserService, 
              public imageService: ImageService) { }

  @ViewChild('fileUploader')
  fileUploader!: ElementRef;

  resetFileUploader(): void { 
    this.fileUploader.nativeElement.value = null;
    this.imageService.cleanIsUpload();
  }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
      } else {
      }
    });

    this.personaService.getPersona(1).subscribe(data => {this.persona = data})
    
  }

  saveData() {
    let checker: string = this.imageService.url;
    if(checker == ''){
    } else {
      this.persona.img = this.imageService.url;
    }
    this.personaService.setPersona(1,this.persona).subscribe(
      data => {console.log('Data updated successfully')
      this.imageService.cleanIsUpload();
      this.isErrorModificar = false;
    },
      error => {console.log(error)
      this.isErrorModificar = true;}
    );
  }

  uploadImage($event:any){
    this.localIsUpload = false;
    const id = this.persona.id;
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);

    this.interval = setInterval(() => {
      this.localIsUpload = this.imageService.isUpload;
      if (this.localIsUpload) {
        clearInterval(this.interval);
        console.log('Subido correctamente')
      }
    },1000)
  }

  isClickedFun(){
    this.isClicked = !this.isClicked;
  }
}
