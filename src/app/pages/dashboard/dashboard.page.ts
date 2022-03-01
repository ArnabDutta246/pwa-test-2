import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'; Chart.register(...registerables);
import { ActivatedRoute } from '@angular/router';
import { SwService } from 'src/app/shared/sw/sw.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public segment: string = "myTopPro";
  public arr = new Array(25);

  @ViewChild('barCanvas', { static: false, read: ElementRef }) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', { static: false, read: ElementRef }) doughnutCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;

  constructor(private sw:SwService) { }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
  }
  //========== please remove later ============
  showBtn:boolean = false;
  pmt:any;
  a2hsRes:any;
  alreadyAdded:boolean = false;
  //========== please remove later ============
  ionViewWillEnter(){
    //========== please remove later ============
    this.sw.a2hs$.subscribe((res)=>{
      console.log("a2hs in home page",res);
      this.a2hsRes = res;
      if(res){
        this.showBtn = res.showButton;
        this.pmt = res.promt;
        this.a2hsRes = res;
        this.alreadyAdded =  this.showBtn?false:true;
      }
   })
    //========== please remove later ============
  }
  //========== please remove later ============
  // a2hs
  addToHome(){
    this.sw.addToHomeScreen(this.a2hsRes);
  }
  //========== please remove later ============
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

  ngOnInit() { }

}
