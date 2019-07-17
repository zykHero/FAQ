import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ManageProjectsModule } from './manage-projects/manage-projects.module';
import { CommonModule } from './common/common.module'


export function createTranslateHttpLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'../assets/lang/','.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }    
    }),
    NgZorroAntdModule,
    ManageProjectsModule,
    CommonModule  
  ],
  exports:[TranslateModule,NgZorroAntdModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
