import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StewardessListComponent } from './stewardesses/stewardess-list/stewardess-list.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';


const routes: Routes = [
  { path: 'stewardesses', component: StewardessListComponent },
  { path: 'pilots', component: PilotListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }