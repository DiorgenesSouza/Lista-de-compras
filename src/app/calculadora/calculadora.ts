import { compileComponentDeclareClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from "@angular/common"

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number = 0;

  calcularResultado() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
}
