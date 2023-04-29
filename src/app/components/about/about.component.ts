import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { LoginDialogComponent } from '../login/login.component';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild(LoginDialogComponent) flag:any;
  disabled:any;
  aboutMe:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngAfterViewInit() {
    this.disabled = this.flag.disabled;
    console.log(this.disabled);
  }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.aboutMe = data.aboutMe;
    });
}}
