import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import {  ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educacionList: any;
  educacion: Educacion = new Educacion("","","");
  newEducacion: Educacion = new Educacion("","","");
  isLogged = false;
  selectedEducacion: any;
  isClicked = false;
  localIsUpload = true;
  interval:any;
  isError = false;
  isErrorModificar = false;
  public selectedClassification = 'Read';
  constructor(public educacionService: EducacionService, private userService: UserService, public imageService: ImageService) { }

  @ViewChild('fileUploader')
  fileUploader!: ElementRef;

  resetFileUploader(): void { 
    this.fileUploader.nativeElement.value = null;
    this.imageService.cleanIsUpload();

  }

  @ViewChild('fileUploader2')
  fileUploader2!: ElementRef;

  resetFileUploader2(): void { 
    this.fileUploader2.nativeElement.value = null;
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

    this.educacionService.getEducacionList().subscribe(data => {this.educacionList = data})
    
  }

	onSelected(value:any): void {
    this.selectedEducacion = value;
    this.educacionService.getEducacion(value).subscribe(data => {this.educacion = data})
	}

  saveData() {
    let checker: string = this.imageService.url;
    if(checker == ''){
    } else {
      this.educacion.img = this.imageService.url;
    }
    this.educacionService.setEducacion(this.selectedEducacion,this.educacion).subscribe(
      data => {console.log('Data updated successfully')
      this.educacionService.getEducacionList().subscribe(data => {this.educacionList = data})
      this.imageService.cleanIsUpload();
      this.resetFileUploader();
      this.isErrorModificar = false;
    },
      error => {console.log(error)
        this.isErrorModificar = true;}
    );

  }

  createData() {
    this.newEducacion.img = this.imageService.url;
    console.log(this.newEducacion)
    this.educacionService.createEducacion(this.newEducacion).subscribe(
      data => {console.log('Data updated successfully')
      this.educacionService.getEducacionList().subscribe(data => {this.educacionList = data})
      this.imageService.cleanIsUpload();
      this.resetFileUploader2();
      this.isError = false;
    },
      error => {console.log(error)
      this.isError = true;}
    );

    }
    onDelete() {
      this.educacionService.deleteEducacion(this.selectedEducacion).subscribe(
        data => {console.log('Data updated successfully')
        this.educacionService.getEducacionList().subscribe(data => {this.educacionList = data})
        this.isErrorModificar = false;
      },
        error => {console.log(error)
          this.isErrorModificar=true;}
      );

  }

  uploadImage($event:any){
    this.localIsUpload = false;
    const id = this.educacion.id;
    const name = "educacion_" + id;
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
