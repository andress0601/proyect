import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getCliente(id: string) {
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }

  saveCliente(cliente: Cliente) {
    return this.http.post(`${this.API_URI}clientes`, cliente);
  }

  updateCliente(id: string|number, updatedClientes: Cliente): Observable<Cliente> {
    return this.http.put(`${this.API_URI}/clientes/${id}`, updatedClientes);
  }
}
