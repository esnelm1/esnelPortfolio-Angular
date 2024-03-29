import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { per } from 'src/app/models/persona.model';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  persona: per = new per("","","","");
  isLogged = false;
  isClicked = false;
  isErrorModificar = false;
  constructor(public personaService: PersonaService, private userService: UserService) {}

  ngOnInit(): void{
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
      } else {
      }
    });
    this.personaService.getPersona(1).subscribe(data => {this.persona = data})
    };

  saveData() {
    this.personaService.setPersona(1,this.persona).subscribe(
      data => {console.log('Data updated successfully')
    this.isErrorModificar = false;},
      error => {console.log(error)
      this.isErrorModificar = true;}
    );
  }

  isClickedFun(){
    this.isClicked = !this.isClicked;
  }


}

