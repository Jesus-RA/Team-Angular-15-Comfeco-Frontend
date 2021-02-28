import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from '../sign-in/sign-in.page';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
