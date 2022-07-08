import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './shop/product-view.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component:ShopComponent },
  {path:'Cart',component:CartComponent},
  {path:'Home',component:ShopComponent},
  {path:'view/:id',component:ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
