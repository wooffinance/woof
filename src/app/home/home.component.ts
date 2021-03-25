import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Ticker, TickerService} from '../_services/ticker.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public tickerLoading:boolean = true;
  ticker: Ticker;
  supply$ = this.tickerService.supply$.pipe(
    map(ticker => ticker)
  );
  burned$ = this.tickerService.burned$.pipe(
    map(ticker => ticker)
  );
  charity$ = this.tickerService.charity$.pipe(
    map(ticker => ticker)
  );
  constructor(private tickerService: TickerService, breakpointObserver: BreakpointObserver) {
    this.tickerLoading = true;
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.supply$.subscribe(() => this.tickerLoading = false);
    this.charity$.subscribe();
    this.burned$.subscribe();

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.tickerService.subscribe(this.ticker);
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.tickerService.unsubscribe(this.ticker);
  }
}
