import { NgModule } from '@angular/core';
import { RenderHTMLPipe } from './pipe/render-html.pipe';

@NgModule({
  declarations: [RenderHTMLPipe],
  imports: [],
  exports:[RenderHTMLPipe]
})
export class CommonModule { }
