import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntemLista } from './itemlista';
import { it } from 'node:test';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-compras',
 imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {

  item: string = "";
  lista: IntemLista[] = [];

  adicionarItem(){
   let itemlista = new IntemLista();
   itemlista.nome = this.item;
   itemlista.id = this.lista.length + 1;

   this.lista.push(itemlista);
    this.item = "";

    console.table(this.lista)
  }

  riscarItem(IntemLista: IntemLista){
    IntemLista.comprado = !IntemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
