import { ActionReducer, Action } from '@ngrx/store';
import * as fromSideNavActions from './../actions/sidenavs';

export interface State {
    start: boolean;
    end: boolean;
}

const initialState: State = { start: false, end: false };

export function sidenavs(state = initialState, action: fromSideNavActions.All) {
    switch (action.type) {
        case fromSideNavActions.SIDENAV_START_SHOW:
            return Object.assign({}, { start: true, end: state.end });
        case fromSideNavActions.SIDENAV_START_HIDE:
            return Object.assign({}, { start: false, end: state.end });
        case fromSideNavActions.SIDENAV_END_SHOW:
            return Object.assign({}, { start: state.start, end: true });
        case fromSideNavActions.SIDENAV_END_HIDE:
            return Object.assign({}, { start: state.start, end: false });
        default:
            return state;
    }
}

