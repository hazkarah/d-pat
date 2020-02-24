import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './views/map.component';
import { MapLayoutComponent } from "src/app/views/map.layout.component";

const routes: Routes = [
/* ROTA RAIZ */ 
  { path: '', component: MapLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
