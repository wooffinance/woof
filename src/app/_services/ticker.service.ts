import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export interface Ticker {
  contractAddress: string;
  tokenName: string;
  symbol: string;
  divisor: string;
  tokenType: string;
  totalSupply: string;
  blueCheckmark: string;
  description: string;
  website: string;
  email: string;
  blog: string;
  reddit: string;
  slack: string;
  facebook: string;
  twitter: string;
  bitcointalk: string;
  github: string;
  telegram: string;
  wechat: string;
  linkedin: string;
  discord: string;
  whitepaper: string;
}

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  private supply: Subscription;
  private burned: Subscription;
  private charity: Subscription;

  supply$ = new BehaviorSubject<Ticker>(undefined);
  burned$ = new BehaviorSubject<Ticker>(undefined);
  charity$ = new BehaviorSubject<Ticker>(undefined);

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  subscribe(ticker) {
    this.supply = interval(5000).pipe(
      switchMap(() => this.http.get<Ticker>(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=CAHI5VFJ3HY2V1HWCHUHJJ3CVGQ9PIY71Z`))
    ).subscribe(this.supply$);

    this.burned = interval(5000).pipe(
        switchMap(() => this.http.get<Ticker>(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=CAHI5VFJ3HY2V1HWCHUHJJ3CVGQ9PIY71Z`))
      ).subscribe(this.burned$);

    this.charity = interval(5000).pipe(
        switchMap(() => this.http.get<Ticker>(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xd9e9Ea5248D86381a5AE5A27d1c0f20A36e59190&apikey=CAHI5VFJ3HY2V1HWCHUHJJ3CVGQ9PIY71Z`))
      ).subscribe(this.charity$);
  }

  // tslint:disable-next-line:typedef
  unsubscribe(ticker) {
    this.supply.unsubscribe();
  }
}
