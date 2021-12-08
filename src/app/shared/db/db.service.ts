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
  url ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  
  // db service
  postNumberToDb(num1:number,num2:number):Observable<any>{
    return this.http.post<any>(this.url,{num1:num1,num2:num2});
  }


  // get all posts
  getPosts():Observable<any>{  
   return this.http.get<any>(this.url).pipe(catchError((error)=>throwError(error)));
  }
  // create
  // update 
  // delete
}
