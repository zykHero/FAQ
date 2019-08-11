import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyProjectComponent} from './manage-projects/my-project/my-project.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/myProject' },
  { 
    path: 'myProject',
    loadChildren: () => import('./manage-projects/manage-projects.module').then(m => m.ManageProjectsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
