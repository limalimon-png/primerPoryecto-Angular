import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

//creamos las rutas que usaremos para navegar
const routes: Routes =[
  {
    path: 'home',
    component: HomeComponent
  },
 
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    //loadChildren: './pages/posts/posts.module#PostsModule'
    //esto lo que hace es la lazyload
    //se va a la ruta donde esta posts
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
 

];

@NgModule({
  declarations: [],
  imports: [
    //con routermodule usamos la ruta que hemos creado arriba
    RouterModule.forRoot(routes)

  ],
  // lo exportamos para poder luego importarlo en el app.module.ts que es el modulo principal de la aplicacion
  exports:[
    RouterModule


  ]
})
export class AppRoutingModule { }
