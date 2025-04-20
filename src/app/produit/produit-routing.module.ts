import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { TableStatistiquesComponent } from './table-statistiques/table-statistiques.component';
import { ChartStatistiquesComponent } from './chart-statistiques/chart-statistiques.component';

const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'table-stats', component: TableStatistiquesComponent }, // ✅
  { path: 'chart-stats', component: ChartStatistiquesComponent } // ✅


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
