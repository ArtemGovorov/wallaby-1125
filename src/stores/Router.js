//router store
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

const router = new RouterStore();
export const history = syncHistoryWithStore(browserHistory, router);

export default router;