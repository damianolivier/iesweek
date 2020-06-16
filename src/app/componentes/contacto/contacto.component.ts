import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, PathReference } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/models/contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  itemname: PathReference = 'contacto';
  contactonuevo: Contacto;

  bandera: boolean;
  envie: boolean;

  constructor(db: AngularFireDatabase) {
    var currentUnixTime = new Date().getTime();
    this.itemname = 'contactos/contacto_' + currentUnixTime;
    this.itemRef = db.object(this.itemname);
    this.item = this.itemRef.valueChanges();
    this.contactonuevo = new Contacto('', '', '', '', '');
    this.envie = false;
  }
  save() {
    this.itemRef.set({ nombre: this.contactonuevo.nombrecompleto, email: this.contactonuevo.email,
      telefono: this.contactonuevo.telefono, mensaje: this.contactonuevo.mensaje, carrera: this.contactonuevo.carrera });
  }
  delete() {
    this.itemRef.remove();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.save();
    this.contactonuevo = new Contacto('', '', '', '', '');
    this.bandera = true;
    this.envie = true;
  }

}
