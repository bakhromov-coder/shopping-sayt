import { Injectable } from '@angular/core';
import { signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Products {
  id: number,
  title: string,
  price: number,
  category: string,
  image: string,
  count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BosServiceService {

  http = inject(HttpClient);

  favitem: Products[] = []

  product = signal<Products[]>([]);

  fav: boolean = false;


  getdata() {
    this.http.get<Products[]>('https://fakestoreapi.com/products').subscribe(data => {
      this.product.set(data)
      console.log(this.product())
    })
  }



  addfav(id: number, item: Products) {
    if (this.favitem.some(el => el.id === id)) {
      this.favitem.forEach(el => {
        if (el.id === id) {
          el.count ? el.count += 1 : el.count = 1
        }
      })
      console.log(this.favitem)

    } else {
      this.favitem.push(
        item
      )
      console.log(this.favitem)
    }
  }




  showfav() {
    this.fav = !this.fav
  }


  constructor() { }
}
