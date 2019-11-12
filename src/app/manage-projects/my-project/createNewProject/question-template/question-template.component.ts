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
  questionList:any = [];
  constructor() { }

  ngOnInit() {
  }

  showQusetionType(type, questionNBoxNum) {
    this.questionType = type;
    this.questionIndex = questionNBoxNum;
  }

  setQuestionList(value){
    
    //判断action，如果是add,则从questionList增加，delete则从questionList中删除
    switch(value['action']){
      case 'add':
      {
        this.addQuestion(value);
        break;
      }
      case 'delete':
      {
        this.deleteQuestion(value);
        break;
      }
      case 'updata':
      {
        this.updataQuestion(value);
        break;
      }
      default:break;
    }
    console.log(value)
  }
  
  private addQuestion(value){
    let tempData = this.dealEmptyValue(value);
    let isExist = this.questionList.find(ele=>{
      return ele['index'] === value['index'];
    });
    if (isExist){
      alert('数据已存在');
      return;
    }
    this.questionList.push(tempData);
  }

  private deleteQuestion(value){
    this.questionList = this.questionList.filter(ele=>{
      return ele['index'] !== value['index'];
    });
  }

  private updataQuestion(value){
    let tempData = this.dealEmptyValue(value);
    this.questionList = this.questionList.map(ele=>{
      if(ele['index']===value['index']){
        ele['data'] = value['data'];
      }
      return ele;
    });
  }
  
  //格式化data中没有value值的，等于默认值
  private dealEmptyValue(value){  
    let temp = value.data.map(ele=>{
      if (ele['value']===''){
        ele['value'] = ele['placeholder']
      }
      return ele;
    });
    return temp;
  }

  //获取当前模板上所有的题目
  private getQusetionList(){

  }

  //更新题目索引序号
  private updataQuestionBoxNum(){

  }
}
