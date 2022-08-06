import { Player } from "./player.model";

export class Matches{
     id! : number ;
     game !:  string  ;
     winner! : Player;
     loser!: Player;
}