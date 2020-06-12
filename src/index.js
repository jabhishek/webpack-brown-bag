import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./container/HomePage";
import {StorePage} from "./container/StorePage";
import {ListPage} from "./container/ListPage";
import {NotFound} from "./container/NotFound";

const App = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/store/:code">
                <StorePage/>
            </Route>
            <Route path="/list">
                <ListPage/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
}

render(<App/>, document.getElementById('app'));
