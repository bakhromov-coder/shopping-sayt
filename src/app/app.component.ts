import { Component, inject, Pipe, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { pipe } from 'rxjs';
import { BosServiceService } from './bos-service.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, CurrencyPipe, NgClass, ProductItemComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = '002';

  serv = inject(BosServiceService)

  ngOnInit(): void {
    this.serv.getdata()
  }






}
