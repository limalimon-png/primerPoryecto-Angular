import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //recibimos la informacion que metemos en la propiedad mensaje desde fuera, que lo recibimos en el html
  @Input() mensaje:any ;
  //usamos evenemitter para poder enviar un evento, ,lo recibe en el posts.component.html
  @Output() enviarAlPadre = new EventEmitter <number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //lo que pongamos entre esos parentesis es lo que recibira el padre
    this.enviarAlPadre.emit(this.mensaje.id);
   // console.log(this.mensaje.id)
  }
}
