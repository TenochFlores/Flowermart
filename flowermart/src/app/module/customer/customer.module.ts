import { CommonModule } from '@angular/common';
import { CustomerBuyingsComponent } from './component/customer-buyings/customer-buyings.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { RegionComponent } from './component/region/region.component';

@NgModule({
  declarations: [
    RegionComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    CustomerBuyingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPhotoEditorModule,
    NgxPaginationModule,
  ]
})

export class CustomerModule { }