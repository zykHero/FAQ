import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  questionData :any = {
    title:{},
    questionList:[]
  };//存放所有题目
  
  constructor() { }
}
