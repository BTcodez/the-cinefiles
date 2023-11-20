import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanderComponent } from './lander/lander.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path: '', component: LanderComponent},
  {path: 'Watchlist', component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
