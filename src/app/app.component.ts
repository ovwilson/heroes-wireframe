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
