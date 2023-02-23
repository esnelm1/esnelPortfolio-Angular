import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent {
  capabilitiesList:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.capabilitiesList = data.computerTools;
    });
  }
}
