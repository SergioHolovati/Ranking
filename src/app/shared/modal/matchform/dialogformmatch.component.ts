import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Player } from "src/app/models/player.model";
import { MatchesService } from 'src/app/services/matches/matches.service';
import { PlayerService } from "src/app/services/player/player.service";

@Component({
  selector: 'app-modal',
  templateUrl: 'modalMatch.component.html',
  styleUrls: ['./modalMatch.component.scss']
})
export class DialogFormMatch {
  form: FormGroup = new FormGroup({
    game: new FormControl(''),
    winner: new FormControl(''),
    loser: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<DialogFormMatch>, 
    private playerService: PlayerService, public formBuilder: FormBuilder, private matchService : MatchesService) { }
  players!: any[];
  newPlayer !: Player;

  onSubmit() {
    let match = {
      game:this.form.value.game,
      winner:this.form.value.winner,
      loser:this.form.value.loser,
      
    }
   this.matchService.create(match).subscribe((response)=>{
    window.location.reload();
   })
  }

  getPlayer() {
    this.playerService.GetPlayers().subscribe((response) => {
      this.players = response;
    })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      game: new FormControl(''),
      winner: new FormControl(''),
      loser: new FormControl('')
    });

    this.getPlayer();
  }

}
