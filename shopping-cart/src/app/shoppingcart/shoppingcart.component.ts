import { Component, OnInit ,ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';
import {ShoppingCartInfo} from '../shopping-cart-info';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ShoppingcartComponent implements OnInit {
 @Input()private percent:number;
 @Input() name:ShoppingCartInfo[];
 @Input()private size:any;
 @Output()grandtotal=new EventEmitter();
  private quant:number[];
  private amount:number=0;
  private cgst:number=0;
  private sgst:number=0;
  private bill:number=0;

  constructor() { }
   ngOnInit() {
     let arr:number[] =new Array(this.name.length).fill(0);
    this.quant=arr;
  }
 private minus(i){
   if(this.quant[i]==0){
      alert("you can't select less than zero")
      this.quant[i]=0;
     }
      else{
   for(let v=0;v<=10;v++){
   if( this.quant[i]==v){
   this.quant[i]=--v;
   } 
   }
   }
    this.result();
 }
  private plus(i){
  if(this.quant[i]==10){
      alert("you can't select more than 10")
      this.quant[i]=10;
     }
      else{
   for(let v=0;v<=10;v++){
   if( this.quant[i]==v){
   this.quant[i]=++v;
   } 
   }
   }
    this.result();
 }
 public result(){
   this.amount=0;
   for(let v=0;v<this.name.length;v++){
     let vaf=(this.quant[v])*(this.name[v].price);
     this.amount+=vaf;
   }
   this.cgst=((this.percent)*(this.amount))/100;
   this.sgst=((this.percent)*(this.amount))/100;
   this.bill=(this.amount)+(this.sgst)+(this.cgst);
   this.grandtotal.emit("Cart Total="+this.amount+"\nCGST= "+this.cgst+"\nSGST= "+this.sgst+"\nTotal Amount= "+this.bill);
 }

 private delete(){
   for(let v=0;v<this.name.length;v++){
     this.quant[v]=0;
   }
   this.result();
 }
 private remove(i){
    this.name.splice(i,1);
    this.quant.splice(i,1);
     this.result();
    }
}