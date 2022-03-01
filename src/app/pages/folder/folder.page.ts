import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'; Chart.register(...registerables);
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public segment: string = "myTopPro";
  public arr = new Array(25);

  @ViewChild('barCanvas', { static: false, read: ElementRef }) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', { static: false, read: ElementRef }) doughnutCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  activatedRoute: any;

  constructor() { }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
          backgroundColor: [
            'rgba(60, 1, 78, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)',
            'rgba(214, 214, 214, 1)'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Total Orders', 'Pending Orders'],
        datasets: [{
          data: [50, 29],
          backgroundColor: [
            'rgba(103, 33, 128, 1)',
            'rgba(230, 77, 82, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
        // doughnutlabel: {
        //   labels: [{
        //     text: '550',
        //     font: {
        //       size: 20,
        //       weight: 'bold'
        //     }
        //   }]
        // }
      }
    });
  }

  ngOnInit() {
  //  this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}