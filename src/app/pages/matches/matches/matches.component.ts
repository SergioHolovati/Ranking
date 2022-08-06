import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/models/matche.model';
import { MatchesService } from 'src/app/services/matches/matches.service';




@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'game', 'winner','loser','action'];
  dataSource! : Matches[];

  constructor(private service : MatchesService) { }

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(){
    this.service.GetMatches().subscribe((response)=>{
      this.dataSource = response;
    });
  }

}
