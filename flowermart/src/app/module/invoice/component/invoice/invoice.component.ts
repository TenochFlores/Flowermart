import { Component } from '@angular/core';
import { DtoInvoiceList } from '../../_dto/dto-invoice-list';
import { InvoiceService } from '../../_service/invoice.service';
import { PagingConfig } from '../../../commons/_models/paging-config';
import { SwalMessages } from '../../../commons/_dto/swal-messages';

declare var $: any; // JQuery

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})

export class InvoiceComponent {

  invoices: DtoInvoiceList[] = []; // Invoice list
  swal: SwalMessages = new SwalMessages(); // swal messages

  page: number | Event = 1;

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  currentPage: number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  pageConfig: PagingConfig = {} as PagingConfig;

  ngOnInit() {
    this.getInvoices();

    this.pageConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe({
      next: (v) => {
        this.invoices = v.body!;
      },
      error: (e) => {
        console.log(e);
        this.swal.errorMessage(e.error!.message); // show message
      }
    });
  }
}