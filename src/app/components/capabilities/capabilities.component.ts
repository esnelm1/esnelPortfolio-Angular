import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { HyS } from 'src/app/models/hys.model';
import { HysService } from 'src/app/services/hys.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent {
  hySList: any;
  hyS: HyS = new HyS("", 0);
  newHyS: HyS = new HyS("", 0);
  isLogged = false;
  selectedHyS: any;
  isClicked = false;
  isError = false;
  isErrorModificar = false;
  public selectedClassification = 'Read';
  constructor(public hysService: HysService, private userService: UserService) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
      } else {
      }
    });

    this.hysService.getHySList().subscribe(data => { this.hySList = data })

  }

  onSelected(value: any): void {
    this.selectedHyS = value;
    this.hysService.getHyS(value).subscribe(data => { this.hyS = data })


  }

  saveData() {
    this.hysService.setHyS(this.selectedHyS, this.hyS).subscribe(
      data => {
        console.log('Data updated successfully')
        this.hysService.getHySList().subscribe(data => { this.hySList = data })
        this.isErrorModificar = false;
      },
      error => {console.log(error)
        this.isErrorModificar = true;
      }
    );


  }

  createData() {
    this.hysService.createHyS(this.newHyS).subscribe(
      data => {
        console.log('Data updated successfully')
        this.hysService.getHySList().subscribe(data => { this.hySList = data })
        this.isError = false;
      },
      error => {console.log(error)
      this.isError = true;
      }
    );


  }

  onDelete() {
    this.hysService.deleteHyS(this.selectedHyS).subscribe(
      data => {
        console.log('Data updated successfully')
        this.hysService.getHySList().subscribe(data => { this.hySList = data })
        this.isErrorModificar = false;
      },
      error => {console.log(error)
      this.isErrorModificar = true;}
    );


  }

  isClickedFun() {
    this.isClicked = !this.isClicked;
  }

}
