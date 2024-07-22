import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponent } from './core/core.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoreComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
