import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./container/HomePage";
import {StorePage} from "./container/StorePage";
import {ListPage} from "./container/ListPage";
import {NotFound} from "./container/NotFound";

console.log('Hi');

const App = () => {
    console.log('Heya');
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/store/:code" component={StorePage}/>
            <Route path="/list" component={ListPage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
}

render(<App/>, document.getElementById('app'));
