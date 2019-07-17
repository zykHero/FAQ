import { Component, OnInit,ElementRef, HostListener,ViewChild, ɵbypassSanitizationTrustResourceUrl} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import{ TranslateService } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {
  toolbarType:{
    button:'button'
  }
  columns:any[]=[];
  data:any[] = [];
  toolbar:any={
    left:[{
      type:"button",      
      title:"新建"
    }],
    right:[]
  };
  constructor(public translate :TranslateService,private translateHtml:DomSanitizer) {
    
  }

  ngOnInit() {
    this.createGridColumns();
    this.getGridData();   
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
