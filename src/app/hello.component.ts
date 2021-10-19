import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<header><h1>Welcome {{name}}!</h1></header>`,
  styles: [`header {
    margin:0px auto 20px;
    padding:10px;
    background:#000000;
    color:#ffffff;
  }h1 { font-family: Lato;text-align: center;
    text-transform: uppercase; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
