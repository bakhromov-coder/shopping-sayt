import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes: Routes = [
    { path: 'favorites', component: FavoritesComponent },
    { path: 'kirish', component: ProductItemComponent },
    { path: 'savat', component: ProductItemComponent }
];
