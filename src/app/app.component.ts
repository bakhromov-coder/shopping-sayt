import { Component, inject, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { pipe } from 'rxjs';

interface Products {
  id:number,
  title:string,
  price:number,
  category:string,
  image:string,
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,CurrencyPipe, NgClass ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class  AppComponent implements OnInit {
  title = '002';

  http = inject(HttpClient);

  product = signal<Products[]>([]);

  fav:boolean = false;

  ngOnInit(): void {
    this.http.get<Products[]>('https://fakestoreapi.com/products').subscribe(data =>{
      this.product.set(data)
      console.log(this.product())
    })
  
  }




  showfav(){
    this.fav = !this.fav
  }






  
}
