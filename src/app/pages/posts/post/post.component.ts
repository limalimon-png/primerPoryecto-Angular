import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //recibimos la informacion que metemos en la propiedad mensaje desde fuera, que lo recibimos en el html
  @Input() mensaje:any ;
  constructor() { }

  ngOnInit(): void {
  }

}
