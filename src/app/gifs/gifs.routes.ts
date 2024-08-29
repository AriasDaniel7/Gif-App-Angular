import { Routes } from '@angular/router';

export const GifsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/gif-list/gif-list.component').then(
            (m) => m.GifListComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
