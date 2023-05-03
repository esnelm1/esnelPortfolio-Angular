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
  hyS: HyS = new HyS("",0);
  newHyS: HyS = new HyS("",0);
  isLogged = false;
  selectedHyS: any;
  public selectedClassification = 'Read';
  constructor(public hysService: HysService, private userService: UserService) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogged = true;
        console.log(this.isLogged);
        console.log(user.email);
      } else {
      }
    });

    this.hysService.getHySList().subscribe(data => {this.hySList = data})
    
  }

	onSelected(value:any): void {
		this.selectedHyS = value;
    this.hysService.getHyS(value).subscribe(data => {this.hyS = data})


	}

  saveData() {
    this.hysService.setHyS(this.selectedHyS,this.hyS).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );


  }

  createData() {
    this.hysService.createHyS(this.newHyS).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );


  }

  onDelete(){
    this.hysService.deleteHyS(this.selectedHyS).subscribe(
      data => {console.log('Data updated successfully')},
      error => console.log(error)
    );


  }

}
