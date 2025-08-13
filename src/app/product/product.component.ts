import { Component, inject } from '@angular/core';
import { BosServiceService } from '../bos-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  serv = inject(BosServiceService)

}
