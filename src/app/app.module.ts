import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DisertantesComponent } from './componentes/disertantes/disertantes.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CountoModule } from 'angular2-counto';

// Conexión a Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    CronogramaComponent,
    DisertantesComponent,
    GaleriaComponent,
    ContactoComponent,
    RedesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CountoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
