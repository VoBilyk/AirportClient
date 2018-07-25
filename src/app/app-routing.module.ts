import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StewardessListComponent } from './stewardesses/stewardess-list/stewardess-list.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';



const routes: Routes = [
  { path: 'stewardesses', component: StewardessListComponent },
  
  { path: 'pilots', component: PilotListComponent },
  { path: 'pilot-detail/:id', component: PilotDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }