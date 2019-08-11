import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectComponent } from './my-project/my-project.component';
import { AddProjectComponent } from './my-project/createNewProject/add-project/add-project.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import {PublicModule} from '../common/CommonModule'
import {ManageProjectRoutingModule} from './manage-projects-routing.module'

@NgModule({
  declarations: [MyProjectComponent, AddProjectComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,FormsModule,PublicModule,ManageProjectRoutingModule
  ]
})
export class ManageProjectsModule { }
