import { Injectable } from '@angular/core';
import { Player } from '../shared/player';
// Firebase modules for Database, Data list and Single object
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Reference to Player data list, its an Observable
  playersRef: AngularFireList<any>;
  // Reference to Player object, its an Observable too    
  playerRef: AngularFireObject<any>;   

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

// Create Player
AddPlayer(player: Player) {
  this.playersRef.push({
    playerName: player.playername,
    dob: player.dob,
    parentName: player.parentname,
    parentMobile: player.parentmobile
  })
}

// Fetch Single Player Object
GetPlayer(id: string) {
  this.playerRef = this.db.object('players-list/' + id);
  return this.playerRef;
}

// Fetch Players List
GetPlayersList() {
  this.playersRef = this.db.list('players-list');
  return this.playersRef;
}  

// Update Player Object
UpdatePlayer(student: Player) {
  this.playerRef.update({
    // playerName:player.playername,
    // dob:player.dob,
    // parentName:player.parentname,
    // parentMobile:player.parentmobile
  })
}  

// Delete Student Object
DeleteStudent(id: string) { 
  this.playerRef = this.db.object('players-list/'+id);
  this.playerRef.remove();
}

}
