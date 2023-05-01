import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { OnInit } from '@angular/core';
import { per } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: per = new per("","","","");
  isLogged = false;
  constructor(public personaService: PersonaService, private userService: UserService) { }

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

    this.personaService.getPersona(1).subscribe(data => {this.persona = data})
    
  }

  saveData() {
    this.personaService.setPersonaAboutMe(1,this.persona).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );
    window.location.reload();
  }
  onFileChanged() {
  }


}
