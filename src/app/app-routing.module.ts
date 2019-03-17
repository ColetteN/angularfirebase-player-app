import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Include components for in which router service to be used
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-player', pathMatch: 'full' },
  { path: 'register-player', component: AddPlayerComponent },
  { path: 'view-players', component: PlayerListComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
