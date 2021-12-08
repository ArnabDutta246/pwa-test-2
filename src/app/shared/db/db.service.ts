import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface Post{
  userId:number;
  id:number;
  title:string;   
  body:string;
}
@Injectable({
  providedIn: 'root'
})
export class DbService{
  // Demo: "api/values/7/8"
  pocUrl = "api/values/7/8";
  constructor(private http:HttpClient) { }
  // db service
  postNumberToDb(num1:number,num2:number):Observable<any>{
    //let getPocR = `${this.pocUrl}/${num1}/${num2}`;
    return this.http.get<any>(this.pocUrl);
  }

}
