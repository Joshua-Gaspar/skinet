import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketTotals } from '../../models/basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  baskeTotal$: Observable<IBasketTotals>;
  constructor(private basketServices : BasketService) { }

  ngOnInit(): void {
    this.baskeTotal$ = this.basketServices.basketTotal$;
  }

}
