import { Component } from '@angular/core';
import {ShoppingCartInfo} from './shopping-cart-info';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    public data:ShoppingCartInfo[]=[
    {"price":4000,"img":"https://images-na.ssl-images-amazon.com/images/I/81-MZqd5CCL._UX395_.jpg","title":"Adidas neo shoe"},
    {"price":3000,"img":"https://images-na.ssl-images-amazon.com/images/I/61A9PrkMgQL._UL1500_.jpg","title":"Nike casual shoe"},
    {"price":2000,"img":"https://images-na.ssl-images-amazon.com/images/I/910nDAIoxOL._UL1500_.jpg","title":"Superdry Casual shoe"},
    {"price":1000,"img":"https://images-na.ssl-images-amazon.com/images/I/81ElcHEZNrL._UL1500_.jpg","title":"Reebok Casual shoe"},
     
  ];
    public tax:number=9;
    public size:any=[6,7,8,9,10,11];

    getTotal(event)
    {
      console.log(event);
    }
}
