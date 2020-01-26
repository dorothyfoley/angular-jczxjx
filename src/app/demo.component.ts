import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo',
  template: `<h2>Demo {{version}}!</h2>`,
  styles: [`h2 { font-family: Lato; }`]
})
export class DemoComponent  {
  @Input() version: string;
}
