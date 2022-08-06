import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { Player } from 'src/app/models/player.model';
import { DialogFormMatch } from './dialogformmatch.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modalMatch.component.html',
  styleUrls: ['./modalMatch.component.scss']
})
export class ModalMatchComponent implements OnInit {
  mostrar: boolean = false;
  public players!: any[];

  form: FormGroup = new FormGroup({
    game: new FormControl(''),
    winner: new FormControl(''),
    loser: new FormControl('')
  });
  submitted = false;
  constructor(public dialog: MatDialog,public formBuilder: FormBuilder) { }


  onSubmit() {
   
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, formType : string): void {
  
    this.dialog.open(DialogFormMatch, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      game: new FormControl(''),
      winner: new FormControl(''),
      loser: new FormControl('')
    });
  }
}
