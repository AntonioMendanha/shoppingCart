import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ProductsListComponent } from './productsList/productsList.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './productsList/product-details/product-details.component';

const appRoutes: Routes = [
  { path: "", component: ContainerComponent},
  { path: "productsList", component: ProductsListComponent},
  { path: 'products/:productId', component: ProductDetailsComponent},
  { path: 'checkout', component: CheckoutComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductsListComponent,
    NavBarComponent,
    CheckoutComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
