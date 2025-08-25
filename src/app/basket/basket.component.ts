import { Component, inject, NgModule } from '@angular/core';
import { BosServiceService } from '../bos-service.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  serv = inject(BosServiceService)

  constructor(public bos: BosServiceService) { }

  get subtotal() {
    return this.bos.umumiynarx().subtotal;
  }

  get discount() {
    return this.bos.umumiynarx().discount;
  }

  get total() {
    return this.bos.umumiynarx().total;
  }
}
