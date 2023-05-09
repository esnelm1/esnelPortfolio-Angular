import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { exp } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import {  ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experienceList: any;
  experience: exp = new exp("","","");
  newExperience: exp = new exp("","","");
  isLogged = false;
  selectedExperience: any;
  isClicked = false;
  interval:any;
  localIsUpload = true;
  isErrorModificar = false;
  isError = false;
  public selectedClassification = 'Read';
  constructor(public experienceService: ExperienceService, private userService: UserService, public imageService: ImageService) { }

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

    this.experienceService.getExperienceList().subscribe(data => {this.experienceList = data})
    
  }

	onSelected(value:any): void {
		this.selectedExperience = value;
    this.experienceService.getExperience(value).subscribe(data => {this.experience = data})

	}

  saveData() {
    let checker: string = this.imageService.url;
    if(checker == ''){
    } else {
      this.experience.img = this.imageService.url;
    }
    this.experienceService.setExperience(this.selectedExperience,this.experience).subscribe(
      data => {console.log('Data updated successfully')
      this.experienceService.getExperienceList().subscribe(data => {this.experienceList = data})
      this.imageService.cleanIsUpload();
      this.resetFileUploader();
      this.isErrorModificar = false;
    },
      error => {console.log(error)
      this.isErrorModificar = true;}
    );
  }

  createData() {
    this.newExperience.img = this.imageService.url;
    this.experienceService.createExperience(this.newExperience).subscribe(
      data => {console.log('Data updated successfully')
      this.experienceService.getExperienceList().subscribe(data => {this.experienceList = data})
      this.imageService.cleanIsUpload();
      this.resetFileUploader2();
      this.isError = false;
    },
      error => {console.log(error)
        this.isError = true}
    );

    }
    onDelete() {
      this.experienceService.deleteExperience(this.selectedExperience).subscribe(
        data => {console.log('Data updated successfully')
        this.experienceService.getExperienceList().subscribe(data => {this.experienceList = data})
        this.isErrorModificar = false;
      },
        error => {console.log(error)
        this.isErrorModificar = true;}
      );
  }

  uploadImage($event:any){
    this.localIsUpload = false;
    const id = this.experience.id;
    const name = "experience_" + id;
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
