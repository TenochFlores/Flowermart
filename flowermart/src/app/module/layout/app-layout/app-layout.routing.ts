import { authenticationGuard } from '../../authentication/_guard/authentication.guard';
import { BuyComponent } from '../../invoice/component/buy/buy.component';
import { CartComponent } from '../../invoice/component/cart/cart.component';
import { CategoryComponent } from '../../product/component/category/category.component';
import { CustomerBuyingsComponent } from '../../customer/component/customer-buyings/customer-buyings.component';
import { CustomerComponent } from '../../customer/component/customer/customer.component';
import { CustomerDetailsComponent } from '../../customer/component/customer-details/customer-details.component';
import { HomeComponent } from '../../home/home.component';
import { InvoiceComponent } from '../../invoice/component/invoice/invoice.component';
import { ProductByCategoryComponent } from '../../product/component/product-by-category/product-by-category.component';
import { ProductComponent } from '../../product/component/product/product.component';
import { ProductDetailsComponent } from '../../product/component/product-details/product-details.component';
import { RegionComponent } from '../../customer/component/region/region.component';
import { Routes } from '@angular/router';
import { SecuredComponent } from '../../authentication/secured/secured.component';

export const AppLayoutRoutes: Routes = [
    { path: 'cart', component: CartComponent },
    { path: 'cart/buy', component: BuyComponent },
    { path: 'category', component: CategoryComponent },
    { path: "customer", component: CustomerComponent },
    { path: "customer/:rfc", component: CustomerDetailsComponent },
    { path: "customer/:rfc/buyings", component: CustomerBuyingsComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/:gtin', component: ProductDetailsComponent },
    { path: 'product/:gtin/buy', component: BuyComponent },
    { path: "products/:category/:category_id", component: ProductByCategoryComponent },
    { path: "region", component: RegionComponent },
    { path: 'secured', component: SecuredComponent, canActivate : [authenticationGuard] },
    { path: '', component: HomeComponent }
];