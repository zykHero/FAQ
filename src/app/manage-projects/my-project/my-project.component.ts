import { Component, OnInit,ElementRef, EventEmitter,Output,ViewChild, ɵbypassSanitizationTrustResourceUrl} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import{ TranslateService } from '@ngx-translate/core';
import { NzInputDirective } from 'ng-zorro-antd';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {
  @Output() afterEdit: EventEmitter<any> = new EventEmitter();
  editId: string | null;
  
  editInputShow:boolean = false;
  currentClickRowIndex:Number = -1;
  toolbarType:{
    button:'button'
  }
  columns:any[]=[];
  data:any[] = [];
  addBtnTitle:string = "";
  toolbar:any={
    left:[],
    right:[]
  };

  constructor(public translate :TranslateService,private translateHtml:DomSanitizer,private elementRef: ElementRef,
    private router:Router) {
    
  }

  ngOnInit() {  
    setTimeout(()=>{
      this.createGridToolbar();
      this.createGridColumns();
    })  
    this.getGridData();   
  }
  startEdit(rowIndex:Number,event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    this.currentClickRowIndex = rowIndex;
  }

  getEditValue(event){
    console.log(event.target.value)
  }

  overEdit(rowIndex:Number,event: MouseEvent):void{
    console.log("")
    this.currentClickRowIndex =-1;
    //this.afterEdit.emit()
    //todo 下发数据接口

  }
  private getGridData(){
    this.data = [
      {
        key:"1",
        name:"212",
        createTime:"2017/11/21",
        editTime:"3"
      },{
        key:"2",
        name:"4ds",
        createTime:"2017/11/21",
        editTime:"3"
      }
    ]
  }
  private createGridToolbar(){ 
    this.toolbar = {
      left:[{
        type:"button",      
        title:this.translate.instant('public.add'),
        callback:()=>{
          this.router.navigate(['myProject/createProject']);
        }
      }],
      right:[]
    };
  }
  private createGridColumns(){
    this.columns=[{
      key:"name",
      width:"30%",
      isEdit:true,
      title:this.translate.instant('project.title'),
      render:(val,key,i,row)=>{
        return `${val}自定义`;
      }
    },{
      key:"createTime",
      title:this.translate.instant('project.createTime'),
    },{
      key:"editTime",
      title:this.translate.instant('project.editTime'),
    },{
      key:"operation",
      title:this.translate.instant('project.operation'),
      render:(val,key,i,row)=>{
        let deleteStr = this.translate.instant('public.delete');
        let pubStr = this.translate.instant('public.publish');
        let resDom = `<table style="width:120px"><tr>
                  <td><a>${deleteStr}</a></td>
                  <td><a>${pubStr}</a></td>
                </tr></table>`;
        return this.translateHtml.bypassSecurityTrustHtml(resDom);   
      }
    }];
  }
}
