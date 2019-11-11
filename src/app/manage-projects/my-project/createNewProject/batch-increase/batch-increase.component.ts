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
    this.batchValue.emit(this.batchIncreaseValue.split('\n'));
  }

  hiddenBatchIncreaseWin() {
    this.isShow = false;
  }
}
