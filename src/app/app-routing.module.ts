import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DisertantesComponent } from './componentes/disertantes/disertantes.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RedesComponent } from './componentes/redes/redes.component';

const routes: Routes = [
  {path: 'acercade', component: AcercadeComponent},
  {path: 'cronograma', component: CronogramaComponent},
  {path: 'disertantes', component: DisertantesComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'redes', component: RedesComponent},
  //{path: '**', pathMatch: 'full', redirectTo: 'acercade'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 100]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
