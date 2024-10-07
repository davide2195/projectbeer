import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cocktails',
    loadComponent: () => import('./pages/beers/beers-page.component')
  },
  {
    path: 'cocktails/:idDrink',
    loadComponent: () => import('./pages/beer-page/beer-page/beer-page.component')
  },
  {
    path: 'vodka',
    loadComponent: () => import('./pages/vodka/vodka')
  },

  {
    path: 'ron',
    loadComponent: () => import('./pages/ron/ron-page.component')
  },
  {
    path: 'tequila',
    loadComponent: () => import('./pages/tequila/tequila-page.component')
  },
  {
    path: 'whisky',
    loadComponent: () => import('./pages/whisky/whisky.component')
  },

  {
    path: '**',
    redirectTo: 'cocktails'
  }
];
