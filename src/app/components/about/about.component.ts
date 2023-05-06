import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { OnInit } from '@angular/core';
import { per } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: per = new per("","","","");
  isLogged = false;
  isClicked = false;
  constructor(public personaService: PersonaService, private userService: UserService, public imageService: ImageService) { }

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
    this.persona.img = this.imageService.url;
    this.personaService.setPersona(1,this.persona).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );
  }

  uploadImage($event:any){
    const id = this.persona.id;
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }

  isClickedFun(){
    this.isClicked = !this.isClicked;
  }
}
