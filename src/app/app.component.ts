import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';

import * as fromSideNavActions from './actions/sidenavs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wireframeAnimation', [
      state('start', style({ transform: 'translateX(0) scale(1)' })),
      state('end', style({ transform: 'translateX(100%) scale(0)' })),
      // transition('start <=> end', animate('100ms ease-out')),
      // transition('end => start', animate('100ms ease-in')),
      transition('void => start', [style({ transform: 'translateX(-100%)' }), animate(200)]),
      transition('start => end', animate(100, style({ transform: 'translateX(100%) scale(1)' }))),
      transition('void => end', [style({ transform: 'translateX(100%) scale(1)' }), animate(100)]),
      transition('end => start', animate(100, style({ transform: 'translateX(0) scale(1)' })))
    ])
  ]
})
export class AppComponent {

  sideNavs$: Observable<any> = Observable.of<any>();
  animationState = 'start';

  constructor(private store: Store<fromRoot.State>) {
    this.sideNavs$ = this.store.select(state => state.sidenavs);
  }

  animateToggle() {
    this.animationState = (this.animationState === 'start' ? 'end' : 'start');
  }

  toggleStart() {
    this.store.dispatch(new fromSideNavActions.SideNavStartToggle());
  }

  toggleEnd() {
    this.store.dispatch(new fromSideNavActions.SideNavEndToggle());
  }

  onClose() {
    console.log('sidenav closed ..')
  }


}
