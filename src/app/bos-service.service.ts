import { Injectable } from '@angular/core';
import { signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count } from 'node:console';


interface Products {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  count?: number,
  heart: boolean,
  cheked?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class BosServiceService {

  http = inject(HttpClient);

  favitem: Products[] = []

  basitem: Products[] = []

  product = signal<Products[]>([]);

  // fav: boolean = false;

  isFav: boolean = false

  heart: boolean = false;


  input = ''

  heartt(item: number) {
    this.product()[item].heart = !this.product()[item].heart
  }

  totalprice = signal<number>(0)

  umumiynarx(){
    this.basitem.forEach(item => item.cheked)
  }


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

  remfav(id: number) {
    if (this.favitem.some(el => el.id === id)) {
      this.favitem.forEach((el, index) => {
        if (el.id === id) {
          if (el.count && el.count > 1) {
            el.count -= 1;
          } else {
            this.favitem.splice(index, 1);
          }
        }
      });
      console.log(this.favitem);
    }
  }

  addbas(id: number, item: Products) {
    if (this.basitem.some(el => el.id === id)) {
      this.basitem.forEach(el => {
        if (el.id === id) {
          el.count ? el.count += 1 : el.count = 1
        }
      })
      console.log(this.basitem)
    }
    else {
      this.basitem.push(
        {
          ...item,
          count: 1
        }

      )
      console.log(this.basitem)
    }
  }

  rembas(id: number, item: Products) {
    this.basitem.forEach((el, index) => {
      if (el.id === id) {
        this.basitem.splice(index, 1); // ✅ count tekshirmay, darhol o‘chirish
      }
    });
    console.log(this.basitem);
  }




  // showfav(item: Products) {
  //   this.fav = !this.fav
  // }

  cleard() {
    this.input = ''
  }

  plus(num: number) {
    this.basitem.forEach(el => {
      if (el.id === num) {
        if (el.count || el.count === 0) {
          el.count += 1
        }
      }
    });
  }

  minus(num: number) {
    this.basitem.forEach(el => {
      if (el.id === num) {
        if (el.count) {
          el.count--
        }
      }
    })
  }




  constructor() { }
}
