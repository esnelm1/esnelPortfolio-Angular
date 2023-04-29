import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiencesList:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experiencesList = data.experiences;
    });
  }
  onFileChanged(){
    
  }
}
