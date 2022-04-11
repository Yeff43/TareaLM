import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {ContactoComponent} from "./componentes/contacto/contacto.component";
import {NavbarComponent} from "./componentes/navbar/navbar.component";

const routes: Routes = [// Aqui van los distintos componentes
//Que nuestro router outler va a manejar
  {path: 'navbar',
    pathMatch:'full',//Esto compara el nombre completo de la ruta
    component: NavbarComponent
  },
  {path: 'home',
    pathMatch:'full',//Esto compara el nombre completo de la ruta
    component: HomeComponent
  },
  {
    path: 'contacto',
    pathMatch:'full',
    component: ContactoComponent
  },
  //LOS DE DEFAULT(Vacio) Y ERROR AL ULTIMO
  {//Componente Vacio, establece cual es la pagina a cargar por defecto
    path: '',
    component: HomeComponent
  },
  {//Para redirigir cuando hay un error, lo ideal es redigir a una pagina que diga que hay error
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
