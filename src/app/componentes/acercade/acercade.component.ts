import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, PathReference } from '@angular/fire/database';
import { Observable, Subject} from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  itemname: PathReference = 'asistiran';
  newvalue: number;
  userAssisted: boolean;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object(this.itemname);
    this.item = this.itemRef.valueChanges();
    this.userAssisted = JSON.parse(localStorage.getItem('userAssisted'));
  }

  save() {
    // this.itemRef.set({ value: 0 });
  }

  update() {
    this.itemRef.update({ value: (this.newvalue+1) });
    localStorage.setItem('userAssisted', 'true');
    this.userAssisted = true;
  }

  delete() {
    this.itemRef.remove();
  }

  ngOnInit() {
    this.item.subscribe((v) => { 
      this.newvalue = v.value;
    });
  }

}
