import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent {

  displayedColumns: string[] = ['nombre', 'direccion', 'correo'];
  dataSource = new MatTableDataSource<Cliente>();

  constructor(private _clienteService: ClienteService) { 
    this.obtenerCliente();
  }

  obtenerCliente() {
    this._clienteService.getClientes().subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      alert("Ocurrio un error");
    })
  }
}
