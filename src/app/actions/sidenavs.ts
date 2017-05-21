import { Action } from '@ngrx/store';

export const SIDENAV_START_SHOW = '[SideNav] Start Show';
export const SIDENAV_START_HIDE = '[SideNav] Start Hide';
export const SIDENAV_END_SHOW = '[SideNav] End Show';
export const SIDENAV_END_HIDE = '[SideNav] End Hide';

export class SideNavStartShow implements Action {
    readonly type = SIDENAV_START_SHOW;
}

export class SideNavStartHide implements Action {
    readonly type = SIDENAV_START_HIDE;
}

export class SideNavEndShow implements Action {
    readonly type = SIDENAV_END_SHOW;
}

export class SideNavEndHide implements Action {
    readonly type = SIDENAV_END_HIDE;
}

export type All
    = SideNavStartShow
    | SideNavStartHide
    | SideNavEndShow
    | SideNavEndHide;
