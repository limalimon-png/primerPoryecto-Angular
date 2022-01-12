import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //AboutComponent,
    //ContactComponent,
    //HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    //importamos el modulo que cremaos anteriormente con las rutas
    AppRoutingModule,
    //importamos las paginas que tenemos creadas
    PagesModule,
    //importamos httpCliente para consumir algo online
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
