import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-table-statistiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-statistiques.component.html',
  styleUrl: './table-statistiques.component.css'
})
export class TableStatistiquesComponent implements OnInit {
  countLiquide = 0;
  countSolide = 0;
  countVapeur = 0;
  total = 0;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.countLiquide = data.filter(p => p.type === 'liquide').length;
      this.countSolide = data.filter(p => p.type === 'solide').length;
      this.countVapeur = data.filter(p => p.type === 'vapeur').length;
      this.total = data.length;
    });
  }

  getPourcentage(count: number): string {
    return this.total ? ((count / this.total) * 100).toFixed(2) + '%' : '0%';
  }
}
