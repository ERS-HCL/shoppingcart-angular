import { Component, OnInit ,ViewEncapsulation,Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {
 @Input()percent:number;
 @Input()name:any;
 @Input()size:any;
   quant:number[];
  amount:number=0;
  cgst:number=0;
  sgst:number=0;
  bill:number=0;
  constructor() { }
   ngOnInit() {
     let arr:number[] =new Array(this.name.length).fill(0);
    this.quant=arr;
  }
 minus(i){
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
 }
  plus(i){
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
 }
 result(){
   this.amount=0;
   for(let v=0;v<this.name.length;v++){
     let vaf=(this.quant[v])*(this.name[v].price);
     this.amount+=vaf;
   }
   this.cgst=((this.percent)*(this.amount))/100;
   this.sgst=((this.percent)*(this.amount))/100;
   this.bill=(this.amount)+(this.sgst)+(this.cgst);
 }
 delete(){
   for(let v=0;v<this.name.length;v++){
     this.quant[v]=0;
   }
   this.result();
 }
 remove(i){
    this.quant[i]=0;
     this.result();
    }
}