import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exp } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'https://esnelportfolio-backend.onrender.com/experiencia/';
  constructor(private http: HttpClient) {}
    public getExperience(id:number): Observable<exp>{
      return this.http.get<exp>(this.URL+`detail/${id}`);
    }
    public getExperienceList(): Observable<exp[]>{
      return this.http.get<exp[]>(this.URL+'lista');
    }
    public setExperience(id:number, experience: exp ): Observable<exp>{
      return this.http.put<exp>(this.URL + `update/${id}`, experience);
    } 
    public createExperience(experience: exp ): Observable<exp>{
      return this.http.post<exp>(this.URL + `create`, experience);
    } 
    public deleteExperience(id:number): Observable<any>{
      return this.http.delete<any>(this.URL + `delete/${id}`);
    } 
}
