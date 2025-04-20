import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'] // ✅ CORRECTION ICI
})
export class ProduitListComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }
}
