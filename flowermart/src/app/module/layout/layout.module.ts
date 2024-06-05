import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLayoutRoutes } from './app-layout/app-layout.routing';
import { AuthenticationModule } from '../authentication/authentication.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './app-layout/footer/footer.component';
import { InvoiceModule } from '../invoice/invoice.module';
import { NavbarComponent } from './app-layout/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppLayoutComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    ProductModule,
    InvoiceModule,
    AuthenticationModule,
  ]
})

export class LayoutModule { }