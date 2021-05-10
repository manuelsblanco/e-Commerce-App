import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore,
              private storage: AngularFireStorage) { }

  // tslint:disable-next-line:typedef
  getAllProducts()
  {
    return this.fs.collection('Products').valueChanges();
  }

  // tslint:disable-next-line:typedef
  getProducts()
  {
    return this.fs.collection('Products').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  updateProducts(id, Price)
  {
    return this.fs.doc('Products/' + id.toString()).update({Price});
  }

  // tslint:disable-next-line:typedef
  deleteProducts(id)
  {
    return this.fs.doc('Products/' + id.toString()).delete();
  }

  // tslint:disable-next-line:typedef
  addNewProducts(name: string, price: number, image: File)
  {
    // tslint:disable-next-line:typedef
    const ref = this.storage.ref('ProductsImages/' + image.name);
    ref.put(image).then( () =>
    {
      ref.getDownloadURL().subscribe(ProductPath =>
      {
        // @ts-ignore
        this.fs.collection('Products').add(
          {
            name,
            price,
            ProductPath
          }
        ).then(r => console.log(r));
      });
    });
  }
}
