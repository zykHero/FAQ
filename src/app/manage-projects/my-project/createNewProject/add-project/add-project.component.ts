import { Component, OnInit,OnDestroy,ViewChild,ViewContainerRef, 
  ComponentFactoryResolver,ComponentRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router'
import { QuestionTemplateComponent } from '../question-template/question-template.component';
import { MyProjectService } from '../../my-project.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit,OnDestroy {
  current = 0;
  firstStepTitle: string = this.translate.instant('project.createFAQ');
  secondStepTitle: string = this.translate.instant('project.publishFAQ');
  thirdTStepitle: string = this.translate.instant('project.reportFAQ');
  projectName: string ='';
  isTitleFocus: boolean = false;
  mainHeading: string = '';
  subHeading: string = '';
  questionData:any = this.MyProjectService.questionData;

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
        id: 'combox',
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
  //目前需要创建组件视图，进行增、删、插入，所以使用ViewContainerRef
  @ViewChild('questionTemplate', { read: ViewContainerRef,static:false })
  questionTemplate:ViewContainerRef;
  componentRef: ComponentRef<QuestionTemplateComponent>;
  
  constructor(public translate: TranslateService,private router: Router,
    private ComponentFactoryResolver: ComponentFactoryResolver,public MyProjectService:MyProjectService) {
  
    }

  ngOnInit() {}
  
  ngOnDestroy(){
    console.log("离开")
  }

  pre() {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    if (this.current === 0) {
      if (this.checkQuestionTitle() !== false){
        alert (`第${this.checkQuestionTitle()}个题目的名称不能为空。`);
        return;
      }
    }
    this.current += 1;
  }

  complete(): void {
    console.log('done');
  }

  onBack(){
    this.router.navigate(['myProject']);
  }

  changeMenu($event,id){
    this.currentMenu = id;
  }

  addTemplate(type){
    const factory = this.ComponentFactoryResolver.resolveComponentFactory(QuestionTemplateComponent);
    const componentRef = this.questionTemplate.createComponent(factory);
    componentRef.instance.showQusetionType(type);
  }

  viewQuestionTemplate() {
    this.questionData.title['mainHeading'] = this.mainHeading ? this.mainHeading :this.translate.instant('project.mainHeading');
    this.questionData.title['subHeading'] = this.subHeading ? this.subHeading :this.translate.instant('project.subHeading');
    this.router.navigate(['myProject/viewProject']);

  }

  private changeContent(){

  }

  // 检查问题的标题是否为空，若是为空，则不能下一步
  private checkQuestionTitle(){
    let emptyTitleIndex = this.questionData.questionList.findIndex(ele=>{
      return ele['title'] === '';
    });
    if (emptyTitleIndex > -1) {
      return emptyTitleIndex+1;
    }else{
      return false;
    }
  }

}
