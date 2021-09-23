import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { IOrderToCreated } from '../shared/models/order';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createOrder( order: IOrderToCreated){
    return this.http.post(this.baseUrl + 'order', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'order/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );
  }
}
