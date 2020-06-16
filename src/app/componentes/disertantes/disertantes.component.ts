import { Component, OnInit } from '@angular/core';
import { Disertante } from 'src/app/models/disertante.model';

@Component({
  selector: 'app-disertantes',
  templateUrl: './disertantes.component.html',
  styleUrls: ['./disertantes.component.css']
})
export class DisertantesComponent implements OnInit {

  disertantes: Array<Disertante> = [];

  disertante1: Disertante;
  disertante2: Disertante;
  disertante3: Disertante;
  disertante4: Disertante;
  disertante5: Disertante;
  disertante6: Disertante;
  disertante7: Disertante;
  disertante8: Disertante;

  constructor() { }

  ngOnInit() {
    this.disertante1 = new Disertante(
                              'Angel',
                              'Letteriello', 
                              '../../../assets/fotos/disertante_angel.jpg', 
                              'Licenciado en RRPP en la Universidad Argentina JF Kennedy. Posgrado en Opinión Pública y Medios de Comunicación de la Facultad Latinoamericana de Ciencias Sociales. ExBecario de la OEA. Director Presidente del Centro de ExBecarios de la OEA. Presidente del Consejo de Relaciones Públicas de las Américas. Docente universitario y autor de libros.', 
                              'Lunes 4/11', 
                              'Sede IES, Tucumán 2721');
    this.disertante2 = new Disertante(
                              'Brenda', 
                              'Mignola', 
                              '../../../assets/fotos/disertante_brenda.jpg', 
                              'Charla "Asesoramiento de imagen y dress code", en la Sede IES. Entrada libre y gratuita. Cupos limitados.', 
                              'Martes 5/11', 
                              'Sede IES, Tucumán 2721');
    this.disertante3 = new Disertante(
                              'Pedro', 
                              'Prez', 
                              '../../../assets/fotos/disertante_pedroprez.jpg', 
                              'Licenciado en Sistemas de la Información y es egresado de la carrera de Analista de Sistemas del IES. Es CEO y Co fundador de Multeo SRL, empresa líder en la captura de actas de infracción digitales para Municipios. Fue CEO y parte del Board de la empresa Keetup SRL, la cual desarrolla soluciones innovadoras para Startups de todo el mundo. Es instructor de Metodologías ágiles ya que disfruta de enseñar y aprender nuevas y mejores formas de trabajo en equipo.', 
                              'Jueves 7/11', 
                              'Sala UPCN');
    this.disertante4 = new Disertante(
                              'Dolores', 
                              'Arriola', 
                              '../../../assets/fotos/disertante_dolores.jpg', 
                              'Licenciada en Relaciones Públicas, egresada de la Universidad de Concepción de Uruguay de Santa Fe. Consultora en Ceremonial, Etiqueta Corporativa y Protocolo Internacional, egresada del Centro de Diplomacia de Karina Vilella de Rosario.', 
                              'Miércoles 6/11', 
                              'Sede IES, Tucumán 2721');
    this.disertante5 = new Disertante(
                              'Macarena', 
                              'Agostini', 
                              '../../../assets/fotos/disertante_macarena.jpg', 
                              'Lic. en Relaciones Públicas, egresada del IES y la UCU. Actualmente, trabaja como organizadora de eventos para Glam Fiestas y Eventos en la Ciudad de Santa Fe y en la Gerencia de RRHH en la empresa Musimundo. Además, en 2017, fundó la consultora Clic, Hora de Comunicar, especializada en comunicación interna y clima laboral, con el objetivo de asesorar a equipos de trabajo a gestionar su comunicación, utilizándola de manera efectiva y estratégica para alcanzar los resultados esperados.', 
                              'Miércoles 6/11', 
                              'Sede IES, Tucumán 2721');
    this.disertante6 = new Disertante(
                              'Rocío', 
                              'Peña', 
                              '../../../assets/fotos/disertante_rocio.jpg', 
                              'Licenciada en Administración de Organizaciones de la Universidad Católica de Santa Fe. Master en Administración y Finanzas de la Universidad Nacional del Litoral y la Universidad de Kaiserslautern de Alemania. Es Directora Provincial de Coordinación Técnica y Programación del Ministerio de Desarrollo Social. Es Miembro del Consejo Elaborador de Normas de Administración (CENADMIN) e Integrante de la Comisión Nacional de Administración de la Federación Argentina de Consejos Profesionales en Ciencias Económicas, además de ser Docente universitaria.', 
                              'Lunes 4/11', 
                              'Sede IES, Tucumán 2721');
    this.disertante7 = new Disertante(
                              'Gustavo', 
                              'Pagliólico', 
                              '../../../assets/fotos/disertante_gustavo.jpg', 
                              'Diseñador gráfico, egresado del IES Santa Fe. Trabajó como: Responsable de Diseño y Desarrollo de Packaging en Milkaut. Diseñador de Packaging para Bonafide. Diseño de catálogo de venta para Martina Di Trento. Proveedor de servicios, capacitación y diseño gráfico - CAME. Responsable de GPDiseño Ideas&Soluciones, estudio de diseño especializado en Packaging, Identidad Corporativa y Capacitación. Docente en Tipografía I. Cátedra Gaitto en la UBA. Docente en Escuela Da Vinci en las carreras Diseño Gráfico y Diseño de Videojuegos en Buenos Aires. Docente Universidad de Palermo.',
                              'Miércoles 6/11',
                              'Sala UPCN');
    this.disertante8 = new Disertante(
                                'Patricio', 
                                'Caruso', 
                                '../../../assets/fotos/disertante_patricio.jpg', 
                                'Periodista digital. Es editor de noticias de la mesa de último momento de TodoNoticias, donde maqueta la portada, envía alertas a celulares, planifica la agenda informativa y lidera el equipo de periodistas digitales. Antes, fue el primer gestor audiencias de Perfilcom, donde empezó como colaborador, luego fue cronista y después redactor. Allí, realizó la primera emisión 4G en medios digitales de Argentina; entrevistas vía Twitter; storytellings periodisticos y publicó diversos artículos de procesamiento de datos e investigación política. Hizo su primer medio en la web a los 11 años. Nadie sabe en qué plataforma hará el último.', 
                                'Jueves 7/11', 
                                'Sala UPCN');

    this.disertantes = [this.disertante1,this.disertante4, this.disertante6, this.disertante5,this.disertante2, this.disertante7, this.disertante3, this.disertante8];
  }

}
