import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl = environment.endpoint;
  private myApiUrl = 'Cliente/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    console.log(`${this.myAppUrl}${this.myApiUrl}`)
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
