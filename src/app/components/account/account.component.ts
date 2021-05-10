import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  ProductsArr: Array<any>;

  @ViewChild('image') image: ElementRef;

  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(cs =>
    {
      this.ProductsArr = cs.map(x =>
      {
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        };
      } );
    });
  }

  // tslint:disable-next-line:typedef
  updateProductsPrice(index)
  {
    this.products.updateProducts(this.ProductsArr[index].id, this.ProductsArr[index].price);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(index)
  {
    this.products.deleteProducts(this.ProductsArr[index].id);
  }

  // tslint:disable-next-line:typedef
  addNewProduct(form: NgForm){
      const name = form.value.name;
        // tslint:disable-next-line:prefer-const
      const price = form.value.price;
        // tslint:disable-next-line:prefer-const
      const image = (this.image.nativeElement as HTMLInputElement).files[0];

      console.log('Name: ' + name);
      console.log('Price: ' + price );
      console.log('Image: ' + image);

      this.products.addNewProducts(name, price, image);

  }

}
