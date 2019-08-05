import { NgModule } from '@angular/core';
import { RenderHTMLPipe } from './pipe/render-html.pipe';
import { NgAutoFocusDirective } from './directive/ng-auto-focus.directive';
@NgModule({
  declarations: [RenderHTMLPipe, NgAutoFocusDirective],
  imports: [],
  exports: [RenderHTMLPipe,NgAutoFocusDirective]
})
export class PublicModule {
}
