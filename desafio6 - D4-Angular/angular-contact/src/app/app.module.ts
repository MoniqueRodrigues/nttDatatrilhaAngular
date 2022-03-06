import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './componente/contact/contact.component';
import { HeaderComponent } from './componente/header/header.component';
import { ImagemPrincipalComponent } from './componente/imagem-principal/imagem-principal.component';
import { MainComponent } from './componente/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    ImagemPrincipalComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
