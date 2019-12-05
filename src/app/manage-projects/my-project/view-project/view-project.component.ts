import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  closeView() {
    this.router.navigate(['myProject/createProject']);
    //初始化页面
  }
}
