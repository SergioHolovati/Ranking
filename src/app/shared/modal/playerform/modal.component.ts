import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { Player } from 'src/app/models/player.model';
import { DialogFormPlayer } from './dialogformplayer.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  mostrar: boolean = false;
  players!: Player[];
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl('')
  });

  formType! : boolean;

  submitted = false;
  constructor(public dialog: MatDialog,public formBuilder: FormBuilder) { }


  onSubmit() {
    console.log();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, formType : string): void {
  
    this.dialog.open(DialogFormPlayer, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
 
  }
}
