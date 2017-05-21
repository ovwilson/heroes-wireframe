import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';

import * as fromSideNavActions from './actions/sidenavs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sideNavs$: Observable<any> = Observable.of<any>();

  constructor(private store: Store<fromRoot.State>) {
    this.sideNavs$ = this.store.select(state => state.sidenavs);
  }

  title = 'Heroes Wireframe Beta';

  openStart() {
    this.store.dispatch(new fromSideNavActions.SideNavStartShow());
  }

  closeStart() {
    this.store.dispatch(new fromSideNavActions.SideNavStartHide());
  }

  openEnd() {
    this.store.dispatch(new fromSideNavActions.SideNavEndShow());
  }

  closeEnd() {
    this.store.dispatch(new fromSideNavActions.SideNavEndHide());
  }


}
