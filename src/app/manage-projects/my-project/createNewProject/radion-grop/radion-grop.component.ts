import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BatchIncreaseComponent } from '../batch-increase/batch-increase.component'
import { MyProjectService } from '../../my-project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-radion-grop',
  templateUrl: './radion-grop.component.html',
  styleUrls: ['./radion-grop.component.css']
})
export class RadionGropComponent implements OnInit {
  @Output() radioData = new EventEmitter<any>();
  @ViewChild('BatchIncreaseComponent', { static: false }) BatchIncreaseComponent: any;

  radioOptions: any = {};
  options: any = [];
  focusTemplate: boolean = true;
  defaultOptionsNum: number = 2;
  showAddRadioMore: boolean = false;
  isShow: boolean = true;
  index: any = new Date().getTime();//用于存放本次创建的radio的数据
  questionIndex: any = 0;
  buttonsString: any = {
    addRadio: this.translate.instant('project.addRadio'),
    addRadioMore: this.translate.instant('project.addRadioMore')
  };
  radioTitle: string = ''

  constructor(private ele: ElementRef, public translate: TranslateService, public MyProjectService: MyProjectService) { }

  ngOnInit() {
    this.listenQuestionTemple();
    this.createDefaultOptions(2);
    this.questionIndex = this.MyProjectService.getQuestionIndex(this.index); 
  }

  addOptions() {
    let tempArr = [{
      placeholder: `选项${this.options.length + 1}`,
      value: `选项${this.options.length + 1}`
    }];
    this.options = [...this.options, ...tempArr];
    this.radioData.emit({
      index: this.index,
      action: 'updata',
      type: 'radio',
      data: this.options,
      title: this.radioTitle
    });
  }

  removeOptions(index) {
    if (this.options.length === 2) {
      alert("单项选择至少需要2项目");
      return;
    }
    this.options = this.options.filter((ele, i) => {
      return i !== index;
    });

    this.radioData.emit({
      index: this.index,
      action: 'updata',
      type: 'radio',
      data: this.options,
      title: this.radioTitle
    });
  }

  addRadioMore() {
    this.showAddRadioMore = true;
  }

  getBathValue(value) {
    let tempArr = value.map((ele, index) => {
      return {
        placeholder: `选项${this.options.length + index + 1}`,
        value: ele
      }
    });
    this.options = [...this.options, ...tempArr];
    //判断是否有重复的值
    let existValue = this.isExistData(this.options);
    if (existValue != '') {
      alert(`${existValue['value']}选项已存在，请修改。`);
      return;
    }
    this.radioData.emit({
      index: this.index,
      action: 'updata',
      type: 'radio',
      data: this.options,
      title: this.radioTitle
    });
  }

  getBathState(value) {
    this.showAddRadioMore = value;
  }

  closeRadioTemplate() {
    this.isShow = false;
    this.radioData.emit({
      action: "delete",
      index: this.index
    });
    this.questionIndex = this.MyProjectService.getQuestionIndex(this.index);
  }

  updataQuestionList() {
    //为空值填入默认值
    let temp = this.dealEmptyData(this.options);
    //判断是否有重复的值
    let existValue = this.isExistData(temp);
    if (existValue != '') {
      alert(`${existValue['value']}选项已存在，请修改。`);
      return;
    }
    this.radioData.emit({
      index: this.index,
      action: 'updata',
      type: 'radio',
      data: temp,
      title: this.radioTitle
    });
  }

  updataTitle(){
    this.radioData.emit({
      index: this.index,
      action: 'updata',
      type: 'radio',
      data: this.options,
      title: this.radioTitle
    });
  }

  private createDefaultOptions(optionsNum) {
    let temp: any = [];
    for (let i = 0; i < optionsNum; i++) {
      temp.push({
        placeholder: `选项${i + 1}`,
        value: `选项${i + 1}`
      });
    }
    this.options = [...this.options, ...temp];
    this.radioData.emit({
      index: this.index,
      action: 'add',
      type: 'radio',
      data: this.options,
      title: this.radioTitle
    });
  }

  private listenQuestionTemple() {
    this.MyProjectService.questionTempleEmit$.subscribe(res=>{
      this.questionIndex = this.MyProjectService.getQuestionIndex(this.index);
    })
  }

  private dealEmptyData(value) {
    let temp = value.map(ele => {
      if (ele['value'] === '') {
        ele['value'] = ele['placeholder'];
      }
      return ele;
    });
    return temp;
  }

  private isExistData(value) {
    if (!Array.isArray(value)) {
      return '';
    }
    let res = '';
    for (let i = 0; i < value.length; i++) {
      let flag = 0;
      for (let j = 0; j < value.length; j++) {
        if (value[i]['value'] === value[j]['value']) {
          flag++;
        }
      }
      if (flag > 1) {
        res = value[i];
        break;
      }
    }
    return res;
  }

}
