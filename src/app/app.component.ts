import { Component, inject, NgModule, Pipe, signal, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { pipe } from 'rxjs';
import { BosServiceService } from './bos-service.service';

import { ProductComponent } from './product/product.component';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, FormsModule],
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
