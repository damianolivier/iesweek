import { Component, OnInit } from '@angular/core';
import { Cronograma } from 'src/app/models/cronograma.model';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  carreras: any[];

  cronograma: Array<Cronograma> = [];

  dia1: Cronograma;
  dia2: Cronograma;
  dia3: Cronograma;
  dia4: Cronograma;
  dia5: Cronograma;
  

  constructor() { }

  ngOnInit() {
    this.dia1 = new Cronograma('1/11/2019', 'Muestra DSW', 'Auditorio IES',
                                '../../../assets/eventos.png'
                              );

    this.dia2 = new Cronograma('2/11/2019', 'Charla Periodismo', 'Auditorio IES',
                                '../../../assets/eventos.png'
                              );

    this.dia3 = new Cronograma('3/11/2019', 'Charla Disertante1', 'UPCN',
                                '../../../assets/eventos.png'
                              );

    this.dia4 = new Cronograma('4/11/2019', 'Muestra Diseño Digital', 'Auditorio IES',
                                '../../../assets/eventos.png'
                              );

    this.dia5 = new Cronograma('5/11/2019', 'Muestra y desfile Diseño de Indumentaria', 'UPCN',
                                '../../../assets/eventos.png'
                              );

    this.cronograma = [this.dia1, this.dia2, this.dia3, this.dia4, this.dia5];
  }

}
