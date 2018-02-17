# shopping-cart-using-angular-and-bootstrap
This is a simple component which will take an array of objects and another array of sizes from user and organize it as a shopping cart.

<p align="center"><img src="https://github.com/srinuvas081/shoppingcart-angular/blob/master/images/cart.png"></p>

To preview demo of shopping cart project, [Click here](https://stackblitz.com/edit/angular-shopping-cart?embed=1&file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview)

## Using the Angular project
  Download the shopping cart folder and install the required packages and run the application. All the required components are imported to the project.
### Installing

```
 > npm install
 ```
 
### Run server

```
 > ng serve
 ```
 
## Adding shopping cart component in your project
 Download the test.component to your angular project and include required components from angular.
 
 ```
 <app-test [name]="data" [percent]="tax" [size]="size"></app-test>
 ```
 
 data,tax and size are the inputs for the shopping cart
 

### Overview
**In this cart your products will be shown along with their respective images,titles and prices and two buttons--plus and minus.**

Using plus button you can increase the quantity of a specific product.

Using minus button you can decrease the quantity of a specific product.

There is also a size dropdown where you can select size of your product.

After selecting all these you need to click checkout button and it will show you bill of all the items you selected.

I have a delete cart option in case you don't want to buy anything, it will automatically make the quantity of every item and total bill to zero and there is also a remove button for every item which will make that item quantity to zero and updates the bill accordingly.



## @Input Decorator
I have used input decorator in order to take input from user.

```typescript
  @Input()percent:number;
  @Input()name:any;
  @Input()size:any;
  ```
  
  percent,name and size are three variables who will take the value from user and send it to my component in order to organize the 
  shopping cart and calculate the output.
  percent variable is to take the tax percentage from the user.
 
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


