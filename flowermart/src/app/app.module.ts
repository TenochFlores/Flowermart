import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './module/authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonsModule } from './module/commons/commons.module';
import { CustomerModule } from './module/customer/customer.module';
import { ErrorInterceptor } from './core/interceptor/request-error.interceptor';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptorInterceptor } from './core/interceptor/jwt-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { ProductModule } from './module/product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    ProductModule,
    AuthenticationModule,
    CommonsModule,
    NgxPhotoEditorModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptorInterceptor])),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }