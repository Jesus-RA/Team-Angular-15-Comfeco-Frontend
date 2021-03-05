import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  // ********** Conservar estas rutas, nos serviran para el lazy load de feature modules ********** 
  // { path: 'insignias', loadChildren: () => import('./submodules/badges/badges.module').then(m => m.BadgesModule) },
  // { path: 'grupos', loadChildren: () => import('./submodules/groups/groups.module').then(m => m.GroupsModule) },
  // { path: 'eventos', loadChildren: () => import('./submodules/events/events.module').then(m => m.EventsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
