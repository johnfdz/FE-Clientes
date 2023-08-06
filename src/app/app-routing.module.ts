import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';

const routes: Routes = [
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'clientes', component: ListClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
