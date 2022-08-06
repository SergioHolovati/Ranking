import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player/player.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'action'];
  dataSource!: Player[];

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    this.service.GetPlayers().subscribe((response) => {
      this.dataSource = response;
    });
  }

  createPlayer() {
    let body;
    this.service.create(body).subscribe((response) => {
      console.log(response);
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe((response) => {
      console.log(response);
    })
  }
  edit(id: number) {
    let object;
    this.service.edit(id, object).subscribe((response) => {
      console.log(response);
    });
  }

}
