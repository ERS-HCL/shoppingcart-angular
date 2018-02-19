# shopping-cart-using-angular-and-bootstrap
This is a simple component which will take an array of objects and another array of sizes from user and organize it as a shopping cart.

<p align="center"><img src="https://github.com/srinuvas081/shoppingcart-angular/blob/master/images/shoppingcart.png"></p>

To preview demo of shopping cart project, [Click here](https://stackblitz.com/edit/angular-shoppingcart?embed=1&file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview)

## Using the Angular project
  Download the shopping cart folder and install the required packages and run the application.
### Installing

```
 > npm install
 ```
 
### Run server

```
 > ng serve
 ```
 
## Adding shopping cart component in your project
 Download the shoppingcart.component to your angular project.
 
 ```typescript
<app-shoppingcart [name]="data" [percent]="tax" [size]="size" (grandtotal)="getTotal($event)"></app-shoppingcart>
 ```
 
 data,tax and size are the inputs for the shopping cart
 

### Overview
**In this cart your products will be shown along with their respective images,titles and prices and two buttons--plus and minus.**

Using plus button you can increase the quantity of a specific product.

Using minus button you can decrease the quantity of a specific product.

Both plus and minus buttons will automatically update the bill according to the quantity you have selected.

There is also a size dropdown where you can select size of your product.

I have a delete cart option in case you don't want to buy anything, it will automatically make the quantity of every item and total bill to zero.

I have a remove button for every item which will remove the item from the cart and updates the bill accordingly.

## @Input Decorator
I have used input decorator in order to take input from user.

```typescript
  @Input()percent:number;
  @Input()name:any[];
  @Input()size:any[];
  ```
  
  percent,name and size are three variables which will take the value from user and send it to shopping cart component in order to organize the 
  shopping cart and calculate the output. percent variable is to take the tax percentage from the user.
 
## JSON Data Format

```
      {   
      "price":"---",
      "img": "----",
      "title":"---"  
      },
      -----
```

  ### JSON Description
    
  - **price**:Price of the product,
  - **img**: Path of image,
  - **title** : Name of the Product.

## @Output Decorator
@Output has been used to provide user with required output. For this i have used EventEmitter.

This method will give you all the billing information.

```typescript
 getTotal(event)
    {
      console.log(event);
    }
```

 
