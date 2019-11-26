import { Component, OnInit } from '@angular/core';
import { RadionGropComponent } from '../radion-grop/radion-grop.component';
import { MutipleComponent } from '../mutiple/mutiple.component';
import { MyProjectService } from '../../my-project.service';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.css']
})
export class QuestionTemplateComponent implements OnInit {
  questionType: string = '';
  constructor(public MyProjectService:MyProjectService) { }

  ngOnInit() {
  }

  showQusetionType(type) {
    this.questionType = type;
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
  }
  
  private addQuestion(value){
    this.MyProjectService.questionList.push(value);  
  }

  private deleteQuestion(value){
    this.MyProjectService.questionList = this.MyProjectService.questionList.filter(ele=>{
      return ele['index'] !== value['index'];
    });
  }

  private updataQuestion(value){
    this.MyProjectService.questionList = this.MyProjectService.questionList.map(ele=>{
      if(ele['index']===value['index']){
        ele = value;
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
    value['data'] = temp;
    return value;
  }
}
