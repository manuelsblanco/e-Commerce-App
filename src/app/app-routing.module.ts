import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes =
[
  {path: '',         component: HomeComponent},
  {path: 'account',  component: AccountComponent},
  {path: 'cart',     component: CartComponent},
  {path: 'login',    component: LoginComponent},
  {path: 'logout',   component: LogOutComponent},
  {path: 'orders',   component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'signup',   component: SignUpComponent},
  {path: '**',       component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
