import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Player } from "src/app/models/player.model";
import { PlayerService } from "src/app/services/player/player.service";

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['./modal.component.scss']
  })
  export class DialogFormPlayer {
    form: FormGroup = new FormGroup({
      fullname: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl('')
    });
    constructor(public dialogRef: MatDialogRef<DialogFormPlayer>, private playerService: PlayerService,public formBuilder: FormBuilder) { }
    players!: Player[];
  
    onSubmit() {
      let player = {
        name:this.form.value.fullname,
        age:this.form.value.age,
        gender:this.form.value.gender,
      }
      this.playerService.create(player).subscribe((response)=>{
        window.location.reload();
      })
    }
  
    getPlayer() {
      this.playerService.GetPlayers().subscribe((response) => {
        this.players = response;
      })
    }
  
    ngOnInit(): void {
      this.form  = new FormGroup({
        fullname: new FormControl(''),
        age: new FormControl(''),
        gender: new FormControl('')
      });
    }
  
  }
  