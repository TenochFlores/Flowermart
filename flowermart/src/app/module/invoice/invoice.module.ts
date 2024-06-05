import { BuyComponent } from './component/buy/buy.component';
import { CartComponent } from './component/cart/cart.component';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';

@NgModule({
  declarations: [
    InvoiceComponent,
    CartComponent,
    BuyComponent,
  ],
  imports: [
    CommonModule,
    NgxPhotoEditorModule,
    NgxPaginationModule,
  ]
})

export class InvoiceModule { }