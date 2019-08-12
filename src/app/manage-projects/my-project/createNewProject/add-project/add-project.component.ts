import { Component, OnInit } from '@angular/core';
import{ TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  current = 0;
  constructor(public translate:TranslateService ) { }

  ngOnInit() {
  }

}
