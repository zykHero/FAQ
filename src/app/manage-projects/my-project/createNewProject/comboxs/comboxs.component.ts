import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BatchIncreaseComponent } from '../batch-increase/batch-increase.component'
import { MyProjectService } from '../../my-project.service';

@Component({
  selector: 'app-comboxs',
  templateUrl: './comboxs.component.html',
  styleUrls: ['./comboxs.component.css']
})
export class ComboxsComponent implements OnInit {
  @Output() comboxData = new EventEmitter<any>();
  @ViewChild('BatchIncreaseComponent', { static: false }) BatchIncreaseComponent: any;

  radioOptions: any = {};
  options: any = [];
  radioIndex: any = 1;
  focusTemplate: boolean = true;
  defaultOptionsNum: number = 2;
  showAddRadioMore: boolean = false;
  isShow: boolean = true;
  index: any = new Date().getTime();//用于存放本次创建的radio的数据
  questionIndex: any = 0
  buttonsString: any = {
    addRadio: this.translate.instant('project.addRadio'),
    addRadioMore: this.translate.instant('project.addRadioMore')
  };
  title: string = ''


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
    this.comboxData.emit({
      index: this.index,
      action: 'updata',
      type: 'combox',
      data: this.options,
      title: this.title
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

    this.comboxData.emit({
      index: this.index,
      action: 'updata',
      type: 'combox',
      data: this.options,
      title: this.title
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
    this.comboxData.emit({
      index: this.index,
      action: 'updata',
      type: 'combox',
      data: this.options,
      title: this.title
    });
  }

  getBathState(value) {
    this.showAddRadioMore = value;
  }

  closeTemplate() {
    this.isShow = false;
    this.comboxData.emit({
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
    this.comboxData.emit({
      index: this.index,
      action: 'updata',
      type: 'combox',
      data: temp,
      title: this.title
    });
  }

  updataTitle(){
    this.comboxData.emit({
      index: this.index,
      action: 'updata',
      type: 'combox',
      data: this.options,
      title: this.title
    });
  }

  private listenQuestionTemple() {
    this.MyProjectService.questionTempleEmit$.subscribe(res=>{
      this.questionIndex = this.MyProjectService.getQuestionIndex(this.index);
    })
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
    this.comboxData.emit({
      index: this.index,
      action: 'add',
      type: 'combox',
      data: this.options,
      title: this.title,
      defaultTitle: '请选择一个选项'
    });
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
