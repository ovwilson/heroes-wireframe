import { Action } from '@ngrx/store';

export const SIDENAV_START_TOGGLE = '[SideNav] Start Toggle';
export const SIDENAV_END_TOGGLE = '[SideNav] End Toggle';

export class SideNavStartToggle implements Action {
    readonly type = SIDENAV_START_TOGGLE;
}

export class SideNavEndToggle implements Action {
    readonly type = SIDENAV_END_TOGGLE;
}


export type All
    = SideNavStartToggle
    | SideNavEndToggle;
