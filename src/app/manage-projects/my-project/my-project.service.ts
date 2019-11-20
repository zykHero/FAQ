import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  questionList :any = [];//存放所有题目
  constructor() { }
}
