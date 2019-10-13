import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  current = 0;
  firstTitle: string = this.translate.instant('project.createFAQ');
  secondTitle: string = this.translate.instant('project.publishFAQ');
  thirdTitle: string = this.translate.instant('project.reportFAQ');
  projectName: string ='';
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
    }]
  },{
    id: 'questionBank',
    items:[{}]
  }]

  currentMenu:any= this.menu[0]['id'];
  constructor(public translate: TranslateService) { }

  ngOnInit() {
    console.log(this.firstTitle)
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
    console.log('返回')
  }


  private changeContent() {

  }

  changeMenu($event,id){
    console.log(id)
    this.currentMenu = id;
  }
}
