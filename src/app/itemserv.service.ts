import { Injectable } from '@angular/core';


interface Products {
  id:number,
  title:string,
  price:number,
  category:string,
  image:string,
  count?:number
}
@Injectable({
  providedIn: 'root'
})
export class broserv {

  constructor() { }

  http = inject(HttpClient);

  product = signal<Products[]>([]);

  favitem = []

  fav:boolean = false;

    this.http.get<Products[]>('https://fakestoreapi.com/products').subscribe(data =>{
      this.product.set(data)
      console.log(this.product())
    })
  



  addfav(thi){}

  showfav(){
    this.fav = !this.fav
  }

}
