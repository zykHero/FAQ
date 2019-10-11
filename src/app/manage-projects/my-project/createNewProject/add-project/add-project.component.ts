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
  ]
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
    
  }


  private changeContent() {

  }

  changeMenu($event,id){
    console.log(id)
    this.currentMenu = id;
  }
}
