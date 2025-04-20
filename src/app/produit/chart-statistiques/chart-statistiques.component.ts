import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartType, registerables } from 'chart.js';
import { ProduitService } from '../service/produit.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-statistiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-statistiques.component.html',
  styleUrls: ['./chart-statistiques.component.css']
})
export class ChartStatistiquesComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef;

  chartType: ChartType = 'pie';
  chart: any;

  types = ['pie', 'doughnut', 'bar', 'line'];
  labels = ['Liquide', 'Solide', 'Vapeur'];
  data: number[] = [];

  constructor(
    private produitService: ProduitService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.produitService.getProduits().subscribe((produits) => {
        const liquide = produits.filter(p => p.type === 'liquide').length;
        const solide = produits.filter(p => p.type === 'solide').length;
        const vapeur = produits.filter(p => p.type === 'vapeur').length;
        this.data = [liquide, solide, vapeur];
        this.renderChart(); // ✅ seulement si on est côté navigateur
      });
    }
  }
  

  renderChart() {
    if (!isPlatformBrowser(this.platformId)) return;
  
    if (this.chart) this.chart.destroy();
  
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Répartition des types',
          data: this.data,
          backgroundColor: ['#4dc9f6', '#f67019', '#f53794']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
  

  onChartTypeChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    this.chartType = selected as ChartType;
    this.renderChart();
  }
}
