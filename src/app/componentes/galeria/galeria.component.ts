import { Component, OnInit } from '@angular/core';
import { Galeria } from '../../models/galeria.models';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
public galeria: Array <Galeria> = [];
public galeria1: Galeria;
public galeria2: Galeria;
public galeria3: Galeria;
public galeria4: Galeria;
public galeria5: Galeria;
public galeria6: Galeria;
public galeria7: Galeria;
public galeria8: Galeria;
public galeria9: Galeria;
public galeria10: Galeria;
public galeria11: Galeria;
public galeria12: Galeria;
public galeria13: Galeria;
public galeria14: Galeria;
public galeria15: Galeria;
public galeria16: Galeria;
public galeria17: Galeria;
public galeria18: Galeria;
public galeria19: Galeria;
  constructor(

  ) { }

  ngOnInit() {
    this.galeria1 = new Galeria('../../../assets/fotos/foto01_p.JPG', 'periodismo1', 'Periodismo Integral y Deportivo');
    this.galeria2 = new Galeria('../../../assets/fotos/foto02_p.JPG', 'periodismo2', 'Periodismo Integral y Deportivo');
    this.galeria3 = new Galeria('../../../assets/fotos/foto03_p.JPG', 'periodismo3', 'Periodismo Integral y Deportivo');
    this.galeria4 = new Galeria('../../../assets/fotos/foto04_p.jpg', 'periodismo4', 'Periodismo Integral y Deportivo');
    this.galeria5 = new Galeria('../../../assets/fotos/foto05_s.JPG', 'software1', 'Desarrollo de Software');
    this.galeria6 = new Galeria('../../../assets/fotos/foto06_s.jpg', 'software2', 'Desarrollo de Software');
    this.galeria7 = new Galeria('../../../assets/fotos/foto07_s.jpg', 'software3', 'Desarrollo de Software');
    this.galeria8 = new Galeria('../../../assets/fotos/foto08_s.jpg', 'software4', 'Desarrollo de Software');
    this.galeria9 = new Galeria('../../../assets/fotos/foto09_d.jpg', 'diseño1', 'Diseño Gráfico y Visual');
    this.galeria10 = new Galeria('../../../assets/fotos/foto10_d.JPG', 'diseño2', 'Diseño Gráfico y Visual');
    this.galeria11 = new Galeria('../../../assets/fotos/foto11_d.JPG', 'diseño3', 'Diseño Gráfico y Visual');
    this.galeria12 = new Galeria('../../../assets/fotos/foto12_d.JPG', 'diseño4', 'Diseño Gráfico y Visual');
    this.galeria13 = new Galeria('../../../assets/fotos/foto13_d.JPG', 'diseño5', 'Diseño Gráfico y Visual');
    this.galeria14 = new Galeria('../../../assets/fotos/foto14_i.jpg', 'indumen1', 'Diseño y Producción de Indumentaria');
    this.galeria15 = new Galeria('../../../assets/fotos/foto15_i.jpg', 'indumen2', 'Diseño y Producción de Indumentaria');
    this.galeria16 = new Galeria('../../../assets/fotos/foto16_i.jpg', 'indumen3', 'Diseño y Producción de Indumentaria');
    this.galeria17 = new Galeria('../../../assets/fotos/foto17_i.jpg', 'indumen4', 'Diseño y Producción de Indumentaria');
    this.galeria18 = new Galeria('../../../assets/fotos/foto018_s.jpeg', 'software18', 'Desarrollo de Software');
    this.galeria19 = new Galeria('../../../assets/fotos/foto19_s.jpg', 'software19', 'Desarrollo de Software');
    this.galeria = [this.galeria1, 
                    this.galeria2, 
                    this.galeria3, 
                    this.galeria4, 
                    this.galeria5,
                    this.galeria6, 
                    this.galeria7, 
                    this.galeria8, 
                    this.galeria9, 
                    this.galeria10, 
                    this.galeria11, 
                    this.galeria12, 
                    this.galeria13, 
                    this.galeria14, 
                    this.galeria15, 
                    this.galeria16, 
                    this.galeria17,
                    this.galeria18,
                    this.galeria19];
      this.shuffle(this.galeria);
      console.log(this.galeria);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

}
