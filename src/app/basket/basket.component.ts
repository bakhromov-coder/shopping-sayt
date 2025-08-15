import { Component, inject } from '@angular/core';
import { BosServiceService } from '../bos-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  serv = inject(BosServiceService)
}
