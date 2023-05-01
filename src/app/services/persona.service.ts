import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { per } from '../models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  constructor(private http: HttpClient) {}
    public getPersona(id:number): Observable<per>{
      return this.http.get<per>(this.URL+`detail/${id}`);
    }
    public setPersonaAboutMe(id:number, descripcion: per ): Observable<per>{
      return this.http.put<per>(this.URL + `update/${id}`, descripcion);
    } 
   }
