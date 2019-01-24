import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

import Counter from './counter'

class App extends React.Component {

    state = {
        articles: []
    }

    loadNews = () => {
        fetch('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({articles: Object.values(data.documents)})
            })
    }

    render() {
        return (
            <div>
                <Button onClick={this.loadNews}>
                    Загрузить новости
                </Button>
                <ul>
                    {this.state.articles.map(article => (
                        <li key={article.title}>{article.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
