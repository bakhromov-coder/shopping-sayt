import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';

import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: "full" },
    { path: 'product', component: ProductComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'basket', component: BasketComponent }
];
