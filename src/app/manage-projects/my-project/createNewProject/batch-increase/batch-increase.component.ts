import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-batch-increase',
  templateUrl: './batch-increase.component.html',
  styleUrls: ['./batch-increase.component.css']
})
export class BatchIncreaseComponent implements OnInit {

  constructor(translate:TranslateService) { }

  ngOnInit() {
  }

}
