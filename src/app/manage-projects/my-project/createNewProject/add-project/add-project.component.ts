import { Component, OnInit,OnDestroy,ViewChild,ViewContainerRef, 
  ComponentFactoryResolver,ComponentRef, ComponentFactory} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router'
import { QuestionTemplateComponent } from '../question-template/question-template.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit,OnDestroy {
  current = 0;
  firstTitle: string = this.translate.instant('project.createFAQ');
  secondTitle: string = this.translate.instant('project.publishFAQ');
  thirdTitle: string = this.translate.instant('project.reportFAQ');
  projectName: string ='';
  isTitleFocus: boolean = false;
  menu:any = [
    {
      id: 'questionType',
      title: '题型',
      icon: ''
    },
    {
      id: 'questionBank',
      title: '题库',
      icon: ''
    },{
      id: 'appearance',
      title: '外观',
      icon: ''
    }
  ];
  toolbar: any = [{
    id: 'questionType',
    items: [{
      title: '选择题',
      children:[{
        id: 'radio',
        icon:'',
        title: '单选题'
      },{
        id: 'multiple',
        icon:'',
        title: '多选题'
      },{
        id: 'imageSelected',
        icon:'',
        title: '图片选择'
      },{
        id: 'imageVote',
        icon:'',
        title: '图片投票'
      },{
        id: 'textVote',
        icon:'',
        title: '文字投票'
      },{
        id: 'comboBox',
        icon:'',
        title: '下拉框'
      },{
        id: 'uplink',
        icon:'',
        title: '级联题'
      },{
        id: 'classify',
        icon:'',
        title: '分类题'
      },{
        id: 'scale',
        icon:'',
        title: '量表题'
      }]
    }
    ,{
      title:'填空题',
      children:[{
        id: 'gapFilling',
        icon:'',
        title: '填空题'
      },{
        id: 'multipleGapFilling',
        icon:'',
        title: '多项填空'
      },{
        id: 'linkGapFilling',
        icon:'',
        title: '连续填空'
      },{
        id: 'table',
        icon:'',
        title: '表格'
      }]
    },{
      title:'打分排序',
      children:[{
        id: 'evaluate',
        icon:'',
        title: '评价题'
      },{
        id: 'mark',
        icon:'',
        title: '打分题'
      },{
        id: 'sort',
        icon:'',
        title: '排序题'
      },{
        id: 'proportion',
        icon:'',
        title: '比重题'
      }]
    }]
  },{
    id: 'questionBank',
    items:[{}]
  }];
  currentMenu:any= this.menu[0]['id'];
  @ViewChild('questionTemplate', { read: ViewContainerRef,static:true })questionTemplate:ViewContainerRef;
  componentRef: ComponentRef<QuestionTemplateComponent>;
  
  constructor(public translate: TranslateService,private router: Router,
    private resolver: ComponentFactoryResolver) {
      const factory: ComponentFactory<QuestionTemplateComponent> = this.resolver.resolveComponentFactory(QuestionTemplateComponent);
      this.componentRef = this.questionTemplate.createComponent(factory);

    }

  ngOnInit() {
    console.log(this.firstTitle)
  }
  
  ngOnDestroy(){
    console.log("离开")
  }

  pre() {
    this.current -= 1;
    this.changeContent()
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  complete(): void {
    console.log('done');
  }

  onBack(){
    this.router.navigate(['myProject'])
    console.log('返回')
  }


  private changeContent() {

  }

  changeMenu($event,id){
    this.currentMenu = id;
  }

}
