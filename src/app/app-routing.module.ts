import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FailedPayComponent } from './components/failed-pay/failed-pay.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageComponent } from './components/manage/manage.component';
import { EditCarouselComponent } from './components/managePages/edit-carousel/edit-carousel.component';
import { EditCategoryComponent } from './components/managePages/edit-category/edit-category.component';
import { EditProductComponent } from './components/managePages/edit-product/edit-product.component';
import { NewCarouselComponent } from './components/managePages/new-carousel/new-carousel.component';
import { NewProductComponent } from './components/managePages/new-product/new-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { SuccessfullComponent } from './components/successfull/successfull.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'products/:tag', component: ProductsListComponent },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'newProduct', component: NewProductComponent },
      { path: 'editProduct', component: EditProductComponent },
      { path: 'newCarousel', component: NewCarouselComponent },
      { path: 'editCarousel', component: EditCarouselComponent },
      { path: 'editCategory', component: EditCategoryComponent },
    ],
  },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  {
    path: 'successfullPay',
    component: SuccessfullComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'failedPay',
    component: FailedPayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adminOrders',
    component: ManageOrdersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
