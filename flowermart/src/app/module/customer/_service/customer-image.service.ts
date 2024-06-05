import { api_dwb_uri } from '../../../shared/uri/api-dwb-uri';
import { ApiResponse } from '../../commons/_dto/api-response';
import { CustomerImage } from '../_model/customer/customer-image';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerImageService {

  private source = "/customer-image";

  constructor(
    private http: HttpClient
  ) { }

  updateCustomerImage(customer_image: CustomerImage): Observable<HttpResponse<ApiResponse>> {
    return this.http.put<ApiResponse>(api_dwb_uri + this.source, customer_image, { observe: 'response' });
  }
}