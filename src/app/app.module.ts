import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AdminProductsComponent } from './products/admin-products/admin-products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditListProductsComponent } from './products/edit-list-products/edit-list-products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { AdminProvincesComponent } from './provinces/admin-provinces/admin-provinces.component';
import { AddProvinceComponent } from './provinces/add-province/add-province.component';
import { EditListProvincesComponent } from './provinces/edit-list-provinces/edit-list-provinces.component';
import { AdminCategoriesComponent } from './categories/admin-categories/admin-categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditListCategoriesComponent } from './categories/edit-list-categories/edit-list-categories.component';
import { AdminCitiesComponent } from './cities/admin-cities/admin-cities.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { EditListCitiesComponent } from './cities/edit-list-cities/edit-list-cities.component';
import { AdminSuppliersComponent } from './suppliers/admin-suppliers/admin-suppliers.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';
import { EditListSuppliersComponent } from './suppliers/edit-list-suppliers/edit-list-suppliers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserListComponent } from './user-list/user-list.component';

//Angular Manual
import { MatToolbarModule } from '@angular/material/toolbar'; //navbar
import { MatButtonModule } from '@angular/material/button'; //btn
import { MatIconModule } from '@angular/material/icon'; // icon
import {MatGridListModule} from '@angular/material/grid-list';// columnas y filas
import {MatFormFieldModule} from '@angular/material/form-field'; //contraseña
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';// quizá haya que borrarlo
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    CarouselComponent,
    FooterComponent,
    ResetPasswordComponent,
    AdminProductsComponent,
    AddProductComponent,
    SignUpComponent,
    EditListProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    AdminProvincesComponent,
    AddProvinceComponent,
    EditListProvincesComponent,
    AdminCategoriesComponent,
    AddCategoryComponent,
    EditListCategoriesComponent,
    AdminCitiesComponent,
    AddCityComponent,
    EditListCitiesComponent,
    AdminSuppliersComponent,
    AddSupplierComponent,
    EditListSuppliersComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTabsModule
    
  ],
  exports: [
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }