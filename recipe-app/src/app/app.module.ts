import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
