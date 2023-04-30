import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMe: any;
  isLogged = false;
  constructor(private datosPortfolio: PortfolioService, private userService: UserService) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
        console.log(this.isLogged);
        console.log(user.email);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.aboutMe = data.aboutMe;
    });

  }
  onFileChanged() {

  }


}
