import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { per } from '../models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://esneportfolio-backend.onrender.com/personas/';
  constructor(private http: HttpClient) {}
    public getPersona(id:number): Observable<per>{
      return this.http.get<per>(this.URL+`detail/${id}`);
    }
    public setPersona(id:number, persona: per ): Observable<per>{
      return this.http.put<per>(this.URL + `update/${id}`, persona);
    } 
   }
