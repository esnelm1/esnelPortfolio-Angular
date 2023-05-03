import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { exp } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

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
  public selectedClassification = 'Read';
  constructor(public experienceService: ExperienceService, private userService: UserService, public imageService: ImageService) { }

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
    this.experience.img = this.imageService.url;
    this.experienceService.setExperience(this.selectedExperience,this.experience).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );
  }

  createData() {
    this.newExperience.img = this.imageService.url;
    this.experienceService.createExperience(this.newExperience).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );

    }
    onDelete() {
      this.experienceService.deleteExperience(this.selectedExperience).subscribe(
        data => {console.log('Data updated successfully')},
        error => console.log(error)
      );
  }

  uploadImage($event:any){
    const id = this.experience.id;
    const name = "experience_" + id;
    this.imageService.uploadImage($event, name);
  }
}
