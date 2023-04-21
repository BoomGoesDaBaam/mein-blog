import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';//#1 add import here

import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { NewsPlansComponent } from './news-plans/news-plans.component';
import { SeiteVierComponent } from './seiteVier/seiteVier.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FinanceComponent,
    NewsPlansComponent,
    HeaderComponent,
    FooterComponent,
    NewsPlansComponent,
    FinanceComponent,
    SeiteVierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     //#2 and name here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
