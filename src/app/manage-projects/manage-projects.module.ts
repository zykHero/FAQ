import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectComponent } from './my-project/my-project.component';
import { AddProjectComponent } from './my-project/createNewProject/add-project/add-project.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { PublicModule } from '../common/CommonModule'
import { ManageProjectRoutingModule } from './manage-projects-routing.module'
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { QuestionTemplateComponent } from './my-project/createNewProject/question-template/question-template.component';
import { RadionGropComponent } from './my-project/createNewProject/radion-grop/radion-grop.component';
import { BatchIncreaseComponent } from './my-project/createNewProject/batch-increase/batch-increase.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { MyProjectService} from './my-project/my-project.service';
import { MutipleComponent } from './my-project/createNewProject/mutiple/mutiple.component';
import { ComboxsComponent } from './my-project/createNewProject/comboxs/comboxs.component';
import { ViewProjectComponent } from './my-project/view-project/view-project.component';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ShareModuleModule } from '../common/share-module/share-module.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [MyProjectComponent, AddProjectComponent, QuestionTemplateComponent, RadionGropComponent, BatchIncreaseComponent, MutipleComponent, ComboxsComponent, ViewProjectComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule, FormsModule, PublicModule, ManageProjectRoutingModule,
    NzStepsModule, NzPageHeaderModule, NzIconModule,
    NzLayoutModule, NzRadioModule,NzAlertModule,NzCheckboxModule,NzSelectModule,
    // ShareModuleModule,
     TranslateModule.forChild()
  ],
  providers:[MyProjectService],
  entryComponents: [QuestionTemplateComponent]
})
export class ManageProjectsModule { }
