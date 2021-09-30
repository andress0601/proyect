import { Router,ActivatedRoute } from '@angular/router';
import { ClienteService } from './../services/cliente.service';
import { Cliente } from './../models/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cliente: Cliente = {
    identificacion:0,
    razon:'',
    personaContacto:'',
    direccion:'',
    telefono:0,
    deparatmento:'',
    ciudad:'',
    cupoOtorgado:0
  }

  edit: boolean = false;
  constructor (private ClienteService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.ClienteService.getClientes(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cliente = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewCliente() {
    delete this.cliente.identificacion;
    this.ClienteService.saveCliente(this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        err => console.error(err)
      )
  }

  updateCliente() {
    
    this.ClienteService.updateCliente(this.cliente.identificacion, this.cliente)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        err => console.error(err)
      )
  }

}
