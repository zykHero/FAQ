import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { MyProjectService } from '../my-project.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  @Output() closeViewProject: EventEmitter<any> = new EventEmitter();

  multipleCheck:boolean = false;
  mainTitle: string = '';
  subTitle: string = '';
  questionViewList: any = [];

  constructor(public translate: TranslateService, public router: Router, private MyProjectService: MyProjectService) { }

  ngOnInit() {
    this.setTitle();
    this.setContent();
  }

  closeView() {
    this.closeViewProject.emit();
  }

  private setTitle() {
    let titleObj = this.MyProjectService.questionData.title;
    if (titleObj) {
      this.mainTitle = titleObj.mainHeading ? titleObj.mainHeading : '';
      this.subTitle = titleObj.subHeading ? titleObj.subHeading : '';
    }
  }

  private setContent() {
    let contentObj = this.MyProjectService.questionData.questionList;
    if ( contentObj && Array.isArray(contentObj)) {
      this.questionViewList = contentObj.map((ele,index)=>{
        return {
          type: ele.type,
          index: index+1,
          data: ele.data,
          title: ele.title
        }
      });
    }
    console.log(this.questionViewList)
  }
}
