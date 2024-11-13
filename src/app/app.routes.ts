import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent,
        title:'home'
    },
    {
        path:'shop',
        component:ShopComponent,
        title:'Shop'
    }
    
];
