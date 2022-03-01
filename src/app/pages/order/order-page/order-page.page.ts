import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {

  public segment: string = "allOrder";
  public arr = new Array(25);

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  
  ngOnInit() {
  }

}
