import { Component } from '@angular/core';
import { per } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  persona: per = new per("","","","");
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    };
}
