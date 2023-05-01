import { Component } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { per } from 'src/app/models/persona.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  persona: per = new per("","","","");
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void{
    this.personaService.getPersona(1).subscribe(data => {this.persona = data})
    };
}
