import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  questionData :any = {
    title:{},
    questionList:[]
  };//存放所有题目
  //创建数据源
  questionTempleSource = new Subject<any>();
  //创建可观察的数据流
  questionTempleEmit$ = this.questionTempleSource.asObservable(); 

  constructor() { }

  emitUpdateQuestionIndex() {
    this.questionTempleSource.next()
  }

  getQuestionIndex(id) {
    let index = this.questionData.questionList.findIndex(ele => {
      return ele['index'] === id;
    });
    return index+1;
  }
  
}
