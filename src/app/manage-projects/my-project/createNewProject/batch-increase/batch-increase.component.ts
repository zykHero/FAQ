import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-batch-increase',
  templateUrl: './batch-increase.component.html',
  styleUrls: ['./batch-increase.component.css']
})
export class BatchIncreaseComponent implements OnInit,OnChanges {
  @Input('isShow') isShow: boolean;

  @Output() batchValue = new EventEmitter<any>();
  @Output() state = new EventEmitter<any>();

  btnOK: string = this.translate.instant('public.btnOk');
  btnCancel: string = this.translate.instant('public.btnCancel');
  infoHelp: string = this.translate.instant('project.addRadioMore_help');
  batchIncreaseValue: any = '';
  isDisabledOKBtn: boolean = true;
  constructor(public translate: TranslateService) { }

  ngOnChanges() {
  }

  ngOnInit() {
   
  }

  watchTextarea(value) {
    this.batchIncreaseValue = value;
    this.isDisabledOKBtn = value == "";
  }

  createRadiousGroup() {
    let foramValueForArray = this.batchIncreaseValue.split('\n');
    //处理空值
    let foramValueForEmpty = this.dealEmptyData(foramValueForArray);
    this.batchValue.emit(foramValueForEmpty);
    this.isShow = false;
    this.state.emit(false);
  }

  hiddenBatchIncreaseWin() {
    this.isShow = false;
    this.state.emit(false);
  }

  private dealEmptyData(value) {
    let temp = value.filter(ele => {
      return ele != '';
    });
    return temp;
  }

}
