import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstiloCssComponent } from './estilo-css/estilo-css.component';
import { EstiloScssComponent } from './estilo-scss/estilo-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloCssComponent,
    EstiloScssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
