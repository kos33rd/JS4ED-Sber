import React from "react"
import Button from '@material-ui/core/Button'


export default class Articles extends React.Component {

    state = { articles: [] }

    loadNews = () => {
        fetch('https://meduza.io/api/v3/search?chrono=shapito&locale=ru&page=0&per_page=24')
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ articles: Object.values(data.documents) })
            })
    }

    render() {
        console.log('PROPS', this.props)
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
