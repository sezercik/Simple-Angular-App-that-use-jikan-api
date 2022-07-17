import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'anime/:id', component: AnimeDetailComponent},
  // { path: 'genre/:id', component: AnimeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
