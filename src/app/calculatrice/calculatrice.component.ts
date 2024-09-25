import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {

  firstNumber: number = 0
  secondNumber: number = 0
  resultNumber: number = 0
  symbol: string = "et"

  randomFirstNum(): void{
    this.firstNumber = Math.floor(Math.random() * 1000)
    this.calcul()
  }

  randomSecondNum(): void{
    this.secondNumber = Math.floor(Math.random() * 1000)
    this.calcul()
  }

  changeSymbol(sym: string): void{
    this.symbol = sym
    this.calcul()
    
  }
  calcul(): void {
    this.resultNumber = eval(this.firstNumber +this.symbol+this.secondNumber)
  }

}
