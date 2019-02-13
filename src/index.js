import React from "react"
import ReactDOM from "react-dom"
import CharactersList from './pages/characters-list/characters-list'
import CharacterDetails from "./pages/character-details/character-details"

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Bar from "./layout/bar"

const App = () =>
    <BrowserRouter>
        <div>
            <Bar />
            <Switch>
                <Route path="/characters/:characterId" component={CharacterDetails} />
                <Route path="/characters*" component={CharactersList} />
                <Redirect from="*" to="/characters" />
            </Switch>
        </div>
    </BrowserRouter>

ReactDOM.render(<App/>, document.getElementById('app'))
