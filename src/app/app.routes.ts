import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ShopComponent } from './shop/shop.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'shop',
        component:ShopComponent,
        title:'Shop'
    },{
        path:'settings',
        component:SettingsComponent,
        title:'Settings'
    }
    
];
