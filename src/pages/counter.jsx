import React from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

export default class Counter extends React.Component {
    state = { count: this.props.initialCount || 0 }
    sub = () => {
        this.setState({ count: this.state.count - 1 })
    }
    add = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <Paper>
                <Button variant="contained" color="primary" onClick={this.sub}>-</Button>
                <span>{this.state.count}</span>
                <Button variant="contained" color="primary" onClick={this.add}>+</Button>
            </Paper>
        )
    }
}
