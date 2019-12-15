import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class ShareModuleModule {
  //？按照约定，模块的静态方法 forRoot 可以同时提供并配置服务。 它接收一个服务配置对象，并返回一个 [ModuleWithProviders]
  static forRoot():ModuleWithProviders{
    return {
      ngModule: ShareModuleModule
    }
  }
 }
