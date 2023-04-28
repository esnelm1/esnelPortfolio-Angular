import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword  } from '@angular/fire/auth';
// notemos que no vamos a usar register porque no vamos a dar lugar a eso en mi portfolio (por las dudas)

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }
  login({ email, password }: any ){ 
    return signInWithEmailAndPassword(this.auth, email, password);
 }
 
}

