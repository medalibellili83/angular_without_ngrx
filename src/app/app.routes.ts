import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'produit',
        loadChildren: () =>
          import('./produit/produit.module').then(m => m.ProduitModule)
      },
      { path: '', redirectTo: 'produit', pathMatch: 'full' }
];
