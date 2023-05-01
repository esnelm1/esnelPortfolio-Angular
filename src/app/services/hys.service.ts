import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HyS } from '../models/hys.model';

@Injectable({
  providedIn: 'root'
})
export class HysService {
  URL = 'https://esneportfolio-backend.onrender.com/skill/';
  constructor(private http: HttpClient) {}
    public getHyS(id:number): Observable<HyS>{
      return this.http.get<HyS>(this.URL+`detail/${id}`);
    }
    public getHySList(): Observable<HyS[]>{
      return this.http.get<HyS[]>(this.URL+'lista');
    }
    public setHyS(id:number, experience: HyS ): Observable<HyS>{
      return this.http.put<HyS>(this.URL + `update/${id}`, experience);
    } 
    public createHyS(experience: HyS ): Observable<HyS>{
      return this.http.post<HyS>(this.URL + `create`, experience);
    } 
    public deleteHyS(id:number): Observable<any>{
      return this.http.delete<any>(this.URL + `delete/${id}`);
    } 
}

