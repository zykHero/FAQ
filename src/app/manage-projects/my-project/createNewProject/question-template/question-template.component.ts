import { Component, OnInit } from '@angular/core';
import { RadionGropComponent } from '../radion-grop/radion-grop.component';
@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css']
})
export class QuestionTemplateComponent implements OnInit {
  questionType: string = '';
  questionIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  showQusetionType(type, questionNBoxNum) {
    this.questionType = type;
    this.questionIndex = questionNBoxNum;
  }

  
  //获取当前模板上所有的题目
  private getQusetionList(){

  }

  //更新题目索引序号
  private updataQuestionBoxNum(){

  }
}
