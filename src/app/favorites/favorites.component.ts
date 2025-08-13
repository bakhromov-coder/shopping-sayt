import { Component } from '@angular/core';
import { BosServiceService } from '../bos-service.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(public serv: BosServiceService) { }
}
