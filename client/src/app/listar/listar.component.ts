import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: any =[];
  constructor(private ClienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.ClienteService.getClientes()
      .subscribe(
        res => {
          this.clientes = res;
        },
        err => console.error(err)
      );
  }

  deleteCliente(id: string) {
    this.ClienteService.deleteCliente(id)
      .subscribe(
        res => {
          console.log(res);
          this.getClientes();
        },
        err => console.error(err)
      )
  }

}
