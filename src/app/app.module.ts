import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { DebitCardComponent } from './payment/debit-card/debit-card.component';
import { UpiComponent } from './payment/upi/upi.component';

const routes:Routes = [
    { path: "", component: HomeComponent },
    {
        path: "payment",
        component: PaymentComponent,
        children: [
            { path: 'creditCard', component: CreditCardComponent },
            { path: 'debitCard', component: DebitCardComponent },
            { path: 'upi', component: UpiComponent },
            { path: '', redirectTo: 'creditCard', pathMatch: 'full' }
        ]
    },
    { path: "**", component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    CreditCardComponent,
    DebitCardComponent,
    UpiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
