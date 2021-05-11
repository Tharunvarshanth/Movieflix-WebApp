import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { IPayPalConfig,
  ICreateOrderRequest   } from 'ngx-paypal';

@Component({
  selector: 'app-buy-movie',
  templateUrl: './buy-movie.component.html',
  styleUrls: ['./buy-movie.component.scss']
})
export class BuyMovieComponent implements OnInit {

  public payPalConfig ?: IPayPalConfig;
   showSuccess: boolean | undefined;
   showCancel: boolean | undefined;
   showError: boolean | undefined;
  @Input() movieprize!: string;
  @Output() outputmsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initConfig();
    console.log(this.movieprize);
  }

  private initConfig(): void {

    this.payPalConfig = {
      currency: 'USD',
      clientId: 'ARS7DQlaFAX533x__6OQqh-5nKdvzkN-ZsNELlVqFBjnLrbQ18snfL4ujuJ2SGvrplggOGESLSG71qf5',
      // for creating orders (transactions) on server see
      // https://developer.paypal.com/docs/checkout/reference/server-integration/set-up-transaction/
      createOrderOnClient: (data) => < ICreateOrderRequest > {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.movieprize.replace('$', '')
              }
            }
          },
          items: [{
            name: 'Enterprise Movie Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: this.movieprize.replace('$', ''),
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;
        this.outputmsg.emit( 'cancel');
      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
        this.outputmsg.emit( 'error');
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        this.outputmsg.emit( 'done');
        this.resetStatus();
      },
    };
  }

  resetStatus(): void {
       console.log('reset status');
  }


}
