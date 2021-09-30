import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ListarComponent
  },
  {
    path: 'clientes/add',
    component: AgregarComponent
  },
  {
    path: 'clientes/edit/:id',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
