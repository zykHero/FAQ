import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectComponent } from './my-project/my-project.component'
import { AddProjectComponent} from './my-project/createNewProject/add-project/add-project.component'
import { ViewProjectComponent } from './my-project/view-project/view-project.component'

const routes: Routes = [
  { 
    path:"",
    children:[{
      path:"",
      component:MyProjectComponent
    },{
      path:'createProject',
      component:AddProjectComponent                      
    }]
  }
  ,{
    path:"**",
    component: MyProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProjectRoutingModule { }
