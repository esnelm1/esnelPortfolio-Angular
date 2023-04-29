import { Component } from '@angular/core';
import { per } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  persona: per = new per("","","","");
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    };
}
