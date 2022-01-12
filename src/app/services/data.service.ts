import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  //recdibe por consola todos los mensajes que se meten en array
  constructor(private http: HttpClient) { }
  //es la funcion
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(posts =>{
        console.log(posts)
      }));

  }
}
