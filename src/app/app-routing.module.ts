import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { examples } from './examples';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'welcome', component: WelcomeComponent },
  ...examples,
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
