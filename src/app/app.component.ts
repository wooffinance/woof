import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ticker, TickerService} from './_services/ticker.service';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  announcements: boolean = false;
  title = 'WOOF.finance';
  public isMobile: boolean = false;
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
  prevSupply;
  prevBurn;
  prevCharity;
  constructor(private tickerService: TickerService, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.supply$.subscribe();
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

  conNumber(number,type){
    var connum = 0;
    if(type === 'burn'){
      connum = this.prevBurn;
    }
    if(type === 'char'){
      connum = this.prevCharity;
    }
    if(type === 'total'){
      connum = this.prevSupply;
    }
    if(number >= 0) {
      if(type === 'burn'){
        this.prevBurn = number;
      }
      if(type === 'char'){
        this.prevCharity = number;
      }
      if(type === 'total'){
        this.prevSupply = number;
      }
      return parseFloat(number);
    }
    return connum;
  }
}
