import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //definiendo estas rutas aqui, podemos acceder desde el menu html
rutas =[
  {
    name: 'home',
    path: '/home'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'contact',
    path: '/contact'
  },
  {
    path: 'posts',
    //loadChildren: './pages/posts/posts.module#PostsModule'
    //esto lo que hace es la lazyload
    //se va a la ruta donde esta posts
    loadChildren: () => import('../../pages/posts/posts.module').then(m => m.PostsModule)
  },
];


  constructor() { }

  ngOnInit(): void {
  }

}
