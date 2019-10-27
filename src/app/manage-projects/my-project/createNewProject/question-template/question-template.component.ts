import { Component, OnInit } from '@angular/core';
import { RadionGropComponent } from '../radion-grop/radion-grop.component';
@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css']
})
export class QuestionTemplateComponent implements OnInit {
  questionType:string = '';
  questionIndex:number = 0;
  questionGrout: any = [{
    id: 'radio',
    content: [{
      title:"请选择一个选项",
      radioGroup:[{
        id: '',
        name: '选项1'
      },{
        id: '',
        name: '选项2'
      }]
    },{

    }]
  },{
    id: 'multiple',
    content: [{
      
    },{

    }]
  }]
  constructor() { }

  ngOnInit() {
  }
  
  showQusetionType(type,questionNBoxNum){
    this.questionType = type;
    this.questionIndex = questionNBoxNum
    console.log(this.questionIndex)
  }
}
