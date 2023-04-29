import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutMe:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.aboutMe = data.aboutMe;
    });
}}
