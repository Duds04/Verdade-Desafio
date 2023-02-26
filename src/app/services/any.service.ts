import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class AnyService {



  constructor(private snackBar: MatSnackBar) { }

  /* snackBar é um tipo jeito de mandar uma mensagem
    1 param -> msg; 2 param -> action (p/ fechar o snackBar por ex); 3 -> configurações (vai aparecer durante 3 segundos em cima do lado direito) */
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-sucess']
    })
  }

  sorteador(max: number, min: number): number{
    return parseInt((Math.random() * (max - min) + min).toFixed(0));
  }
}
