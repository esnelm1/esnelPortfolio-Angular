import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://esnelportfolio-backend.onrender.com/educacion/';
  constructor(private http: HttpClient) {}
    public getEducacion(id:number): Observable<Educacion>{
      return this.http.get<Educacion>(this.URL+`detail/${id}`);
    }
    public getEducacionList(): Observable<Educacion[]>{
      return this.http.get<Educacion[]>(this.URL+'lista');
    }
    public setEducacion(id:number, educacion: Educacion ): Observable<Educacion>{
      return this.http.put<Educacion>(this.URL + `update/${id}`, educacion);
    } 
    public createEducacion(educacion: Educacion ): Observable<Educacion>{
      return this.http.post<Educacion>(this.URL + `create`, educacion);
    } 
    public deleteEducacion(id:number): Observable<any>{
      return this.http.delete<any>(this.URL + `delete/${id}`);
    } 
}

