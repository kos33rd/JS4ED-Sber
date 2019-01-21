import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

import Counter from './counter'

class App extends React.Component {
    render() {
        return (
            <div>
               <Counter initialCount={5} />
               <Counter initialCount={-8} />
                <Button onClick={()=>{}}>
                    Добавить счётчик
                </Button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
