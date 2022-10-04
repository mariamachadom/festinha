import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdAdultos: number;
  qtdCriancas: number;
  totalSalgadinhoAdulto: number = 0;
  totalSalgadinhoCrianca: number = 0;
  totalRefrigeranteAdulto: number = 0;
  totalRefrigeranteCrianca: number = 0;
  totalBoloAdulto: number = 0;
  totalBoloCrianca: number = 0;
  totalSalgadinho: number = 0;
  totalRefrigerante: number = 0;
  totalBolo: number = 0;

  constructor() { }

  calcular() {
    if (this.qtdAdultos || this.qtdCriancas) {
      this.totalSalgadinhoAdulto = this.qtdAdultos * 10;
      this.totalSalgadinhoCrianca = this.qtdCriancas * 7;
      this.totalRefrigeranteAdulto = this.qtdAdultos * 400;
      this.totalRefrigeranteCrianca = this.qtdCriancas * 300;
      this.totalBoloAdulto = this.qtdAdultos * 100;
      this.totalBoloCrianca = this.qtdCriancas * 100;

      this.totalSalgadinho = this.totalSalgadinhoAdulto + this.totalSalgadinhoCrianca;
      this.totalRefrigerante = (this.totalRefrigeranteAdulto + this.totalRefrigeranteCrianca) / 1000;
      this.totalBolo = (this.totalBoloAdulto + this.totalBoloCrianca) / 1000;
    }
  }

}
