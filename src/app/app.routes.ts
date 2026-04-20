import { Routes } from '@angular/router';
import { Order } from './pages/order/order';
import { Track } from './pages/track/track';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'order',
    component: Order
  },
  {
    path: 'track',
    component: Track
  },
  {
    path: '**',
    redirectTo: ''
  }
];