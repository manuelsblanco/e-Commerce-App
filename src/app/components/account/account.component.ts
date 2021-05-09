import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @ViewChild('image') image: ElementRef;

  constructor(private products: ProductsService) { }

  ngOnInit(): void {
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
