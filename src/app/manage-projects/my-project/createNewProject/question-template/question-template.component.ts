import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css']
})
export class QuestionTemplateComponent implements OnInit {
  questionType:string = '';
  questionIndex:number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  showQusetionType(type,questionNBoxNum){
    this.questionType = type;
    this.questionIndex = questionNBoxNum
    console.log(this.questionIndex)
  }
}
