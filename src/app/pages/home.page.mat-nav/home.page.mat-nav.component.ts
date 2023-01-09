import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home.page.mat-nav',
  templateUrl: './home.page.mat-nav.component.html',
  styleUrls: ['./home.page.mat-nav.component.scss']
})
export class HomePageMatNavComponent {

  title = 'rssIndoorTV.org - Mídia Interna';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
