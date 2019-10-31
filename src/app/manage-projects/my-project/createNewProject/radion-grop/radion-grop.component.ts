import { Component, OnInit,Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-radion-grop',
  templateUrl: './radion-grop.component.html',
  styleUrls: ['./radion-grop.component.css']
})
export class RadionGropComponent implements OnInit {
  @Input() index:any = 1;
  radioOptions:any = {};
  options:any = [];
  constructor(private ele:ElementRef) { }

  ngOnInit() {
    this.createOptions(2);
  }

  createOptions(optionsNum){
    let temp :any=[];
    for(let i=0;i<optionsNum;i++){
      temp.push({
        label:`选项${i+1}`,
        value:''
      });
    }
    this.options = [...this.options,...temp];
  }

  removeOptions(index) {
    this.options = this.options.filter((ele,i)=>{
      return i !==index;
    });
  }

}
