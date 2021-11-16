import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-ident',
  templateUrl: './ident.component.html',
  styleUrls: ['./ident.component.css']
})
export class IdentComponent implements OnInit {

  identForm!:FormGroup;
  @Output() leChiffre = new EventEmitter<number>();
  @Output() nbTable = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.identForm = new FormGroup({
      chiffre: new FormControl(''),
      nbTables: new FormControl('')
    });
  }
  get formControls() { return this.identForm.controls; }

  choix() {
    let chiffre = this.identForm.value.chiffre;
    console.log("le chiffre est :" + chiffre);
    this.leChiffre.emit(this.identForm.value.chiffre);
    let tables = this.identForm.value.nbTables;
    console.log("le 2eme chiffrre est :" + tables);
    this.nbTable.emit(tables);


  }
}
