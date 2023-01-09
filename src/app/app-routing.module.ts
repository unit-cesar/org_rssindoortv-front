import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageMatNavComponent } from './pages/home.page.mat-nav/home.page.mat-nav.component';
import { NotFoundPageComponent } from './pages/not-found.page/not-found.page.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },

  { path: '', component: HomePageMatNavComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
