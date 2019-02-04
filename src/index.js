import React from "react"
import ReactDOM from "react-dom"
import Articles from './pages/articles'
import Counter from "./pages/counter"

import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () =>
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>

            <Route path="/articles*" component={Articles}/>
            <Route path="/counter" component={Counter}/>
        </div>
    </BrowserRouter>

ReactDOM.render(<App/>, document.getElementById('app'))
