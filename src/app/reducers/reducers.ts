import * as fromLoading from './loaders';
import * as fromSideNavs from './sidenavs';

export interface State {
    loading: boolean;
    sidenavs: fromSideNavs.State;
};

export function reducers() {
    return {
        loading: fromLoading.loader,
        sidenavs: fromSideNavs.sidenavs
    };
};
