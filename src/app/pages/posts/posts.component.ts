import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  mensajes: any;
 
  constructor(private DataService: DataService) { }

  ngOnInit(){

    //console.log('INIT!!')
    //metemos toda lainformacion que recibimos de la funcion getposts y lo metemos en mensajes
     this.mensajes=this.DataService.getPosts()
    /*.subscribe( (posts: any)  => 
    {
      console.log(posts);
      this.mensajes =posts;
    
   });*/

}
  
}
