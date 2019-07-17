import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyProjectComponent} from './manage-projects/my-project/my-project.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/myProject' },
  { path:'myProject', component:MyProjectComponent},
  { 
    path: 'projectManager',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
