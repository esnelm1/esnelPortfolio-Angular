import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

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
  public selectedClassification = 'Read';
  constructor(public educacionService: EducacionService, private userService: UserService) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
        console.log(this.isLogged);
        console.log(user.email);
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
    this.educacionService.setEducacion(this.selectedEducacion,this.educacion).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );
    this.ngOnInit()
  }

  createData() {
    this.educacionService.createEducacion(this.newEducacion).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );
    this.ngOnInit()
    }
    onDelete() {
      this.educacionService.deleteEducacion(this.selectedEducacion).subscribe(
        data => {console.log('Data updated successfully')},
        error => console.log(error)
      );
      this.ngOnInit()
  }

  onFileChanged(){

  }

}
