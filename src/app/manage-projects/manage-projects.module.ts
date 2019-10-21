import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectComponent } from './my-project/my-project.component';
import { AddProjectComponent } from './my-project/createNewProject/add-project/add-project.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import {PublicModule} from '../common/CommonModule'
import {ManageProjectRoutingModule} from './manage-projects-routing.module'
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { QuestionTemplateComponent } from './my-project/createNewProject/question-template/question-template.component';
@NgModule({
  declarations: [MyProjectComponent, AddProjectComponent, QuestionTemplateComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,FormsModule,PublicModule,ManageProjectRoutingModule,
    NzStepsModule,NzPageHeaderModule,NzIconModule,
    NzLayoutModule
  ]
})
export class ManageProjectsModule { }
