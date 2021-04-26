import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-input-checkbox/lib/react-input-checkbox.min.css';
import './styles-for-checkbox.css';
import HomepageScreen from './screens/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestComponent } from "./components/TestComponent";

const App = () => {
    return(
        <Switch>
            <Route path='/' exact component={ HomepageScreen } />
            <Route path='/test'><p>TEST URL FOR ROUTER</p></Route>
            <Route path='/slug/:slug'>
                <TestComponent />
            </Route>
            <Route path='/slug/'>
                <h1>NO usePARAMS</h1>
            </Route>
        </Switch>
    )
};

export default App;