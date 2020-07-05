import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
