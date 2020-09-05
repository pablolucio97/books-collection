import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../src/pages/Home/index'
import List from '../src/pages/List/index'
import Add from '../src/pages/Add/index'
import Select from './pages/Select/index'
import Remove from '../src/pages/Remove/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/list-books' component={List}/>
                <Route path='/add-book'  component={Add}/>
                <Route path='/find-book' component={Select}/>
                <Route path='/delete-book' component={Remove}/>
            </Switch>
        </BrowserRouter>
    )
}