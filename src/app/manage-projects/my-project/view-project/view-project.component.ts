import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {MyProjectService} from '../my-project.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(public translate:TranslateService, public router: Router,private MyProjectService:MyProjectService ) { }

  ngOnInit() {
    console.log(this.MyProjectService.questionData)
  }

  closeView() {
    this.router.navigate(['myProject/createProject']);
    //初始化页面
  }
}
