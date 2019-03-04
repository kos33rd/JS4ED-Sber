import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import CharactersList from './pages/characters-list/characters-list'
import CharacterDetails from "./pages/character-details/character-details"
import Bar from "./layout/bar"

import { store } from "./store"
import Chart from "./pages/chart"

const App = () =>
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Bar />
                <Switch>
                    <Route path="/characters/:characterId" component={CharacterDetails} />
                    <Route path="/characters*" component={CharactersList} />
                    <Route path="/chart" component={Chart} />
                    <Redirect from="*" to="/characters" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

ReactDOM.render(<App/>, document.getElementById('app'))
