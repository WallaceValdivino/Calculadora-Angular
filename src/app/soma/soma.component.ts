import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent {
  
    num1: number = 0;
    num2: number = 0;
resultado: number = 0;
    calc(op: string){
    switch (op) {
        case '+':
            this.resultado =  this.num1 +  this.num2;
            break;

        case '-':
            this.resultado =  this.num1 -  this.num2;
            break;

        case '/':
            this.resultado =  this.num1 /  this.num2;
            break;

        case '*':
            this.resultado =  this.num1 *  this.num2;
            break;
    }

}
}
