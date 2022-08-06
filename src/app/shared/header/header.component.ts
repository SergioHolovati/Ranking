import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormMatch } from '../modal/matchform/dialogformmatch.component';
import { DialogFormPlayer } from '../modal/playerform/dialogformplayer.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  modalFilter(modal:string){
    if(modal == "player"){

      this.openDialogPlayer('0ms', '0ms');
    }else{

      this.openDialogMatch('0ms', '0ms');
    }
  }

  openDialogMatch(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogFormMatch, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogPlayer(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogFormPlayer, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

