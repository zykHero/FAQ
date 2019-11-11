import { Component, OnInit, Input, ElementRef, Output,EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {BatchIncreaseComponent} from '../batch-increase/batch-increase.component'
@Component({
  selector: 'app-radion-grop',
  templateUrl: './radion-grop.component.html',
  styleUrls: ['./radion-grop.component.css']
})
export class RadionGropComponent implements OnInit {  
  @Output() radioData = new EventEmitter<any>();
  radioOptions: any = {};
  options: any = [];
  radioIndex:any = 1;
  focusTemplate: boolean = true;
  defaultOptionsNum: number = 2;
  showAddRadioMore: boolean = false;
  isShow:boolean = true;
  index :any =new Date().getTime();//用于存放本次创建的radio的数据
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

  addRadioMore(){
    this.showAddRadioMore = true;
  }

  //todo
  getBathValue(value){
    console.log(value)
  }

  getBathState(value){
    this.showAddRadioMore = value;
  }


  closeRadioTemplate(){
    this.isShow = false;
    //TODO 删除此条数据
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

  private getRadioData(){

  }

}
