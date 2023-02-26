import { SuekaDialogAmarelouComponent } from './../sueka-dialog-amarelou/sueka-dialog-amarelou.component';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { AnyService } from '../../../services/any.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sueka-home',
  templateUrl: './sueka-home.component.html',
  styleUrls: ['./sueka-home.component.css']
})
export class SuekaHomeComponent implements OnInit {
  valorSorteado!: number
  card!: string
  numCard!: number
  indexCard!: number
  indexPessoa!: number
  maxVerdade!: number
  maxDesafio!: number
  naoRepetirPessoa!: Array<number>
  naoRepetirCard!: Array<number>

  constructor(private anyService: AnyService, private headerService: HeaderService, private dialog: MatDialog) {
    headerService.headerData = {
    title: 'Truth or Dare',
    icon: 'videogame_asset',
    routeUrl: '/sueka'
  }}

  ngOnInit(): void {
    this.numCard = 0
    this.naoRepetirCard = []
    this.maxVerdade = 118
    this.maxDesafio = 213
    for (let i = 1; i <= this.maxDesafio ; i++) {
      this.naoRepetirCard.push(i)
    }
  }

  condicao(aux: number, array: Array<number>) {
    let i = this.maxDesafio
    let condicao = false
    array.forEach((element, index) => {
      if (aux == element) {
        condicao = true
        i = index
      }
    })
    return { condicao, i }
  }

  // 0 pra verdade, 1 para desafio
  sorteio(op: number) {
    if(op==0)
      this.numCard = this.anyService.sorteador(this.maxVerdade+1, 1)
    if(op==1)
      this.numCard = this.anyService.sorteador(this.maxDesafio+1, this.maxVerdade)
    let obj = this.condicao(this.numCard, this.naoRepetirCard)

    if (obj.condicao) {
      this.card = `assets/img/cartas/${this.numCard}.png`
      this.indexCard = obj.i
      console.log("this.card "+ this.card, this.indexCard )
    } else if (this.naoRepetirCard.length == 0) {
      this.anyService.showMessage("Todos os cards foram sorteados!")
      this.card = ``
      this.numCard = 0
    } else {
      this.sorteio(op)
    }
  }

  remover() {
    if (this.indexCard == -1) {
      this.anyService.showMessage("Faça o sorteio antes de tentar retirar algo!")
      return
    }
    try {
      this.naoRepetirCard.splice(this.indexCard, 1)
      this.anyService.showMessage("Carta removida com sucesso!")
      this.card = `Sem Imagem`
      this.numCard = 0
    } catch (e) {
      console.log(e)
    }
  }

  reproduzirAudio(){
    const audio = document.querySelector('audio')
    audio?.play()
  }

  openDialog () {
    this.reproduzirAudio()
    this.dialog.open(SuekaDialogAmarelouComponent, {
      width: '400px',
    });
 }

}
