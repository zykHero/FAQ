import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {BatchIncreaseComponent} from '../batch-increase/batch-increase.component'
@Component({
  selector: 'app-radion-grop',
  templateUrl: './radion-grop.component.html',
  styleUrls: ['./radion-grop.component.css']
})
export class RadionGropComponent implements OnInit {
  @Input() index: any = 1;
  radioOptions: any = {};
  options: any = [];
  focusTemplate: boolean = true;
  defaultOptionsNum: number = 2;
  buttonsString: any = {
    addRadio: this.translate.instant('project.addRadio'),
    addRadioMore: this.translate.instant('project.addRadioMore')
  };
  constructor(private ele: ElementRef, public translate: TranslateService) { }

  ngOnInit() {
    this.createDefaultOptions(2);
  }

  addOptions() {
    let tempArr = [{
      label: `选项${this.options.length + 1}`,
      value: ''
    }];
    this.options = [...this.options, ...tempArr];
  }

  removeOptions(index) {
    if (this.options.length === 2) {
      alert("单项选择至少需要2项目");
      return;
    }
    this.options = this.options.filter((ele, i) => {
      return i !== index;
    });
  }

  private createDefaultOptions(optionsNum) {
    let temp: any = [];
    for (let i = 0; i < optionsNum; i++) {
      temp.push({
        label: `选项${i + 1}`,
        value: ''
      });
    }
    this.options = [...this.options, ...temp];
  }
}
