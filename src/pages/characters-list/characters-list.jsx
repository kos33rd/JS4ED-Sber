import React from "react"
import Grid from "@material-ui/core/Grid"

import { CharacterCard } from "./character-card"


export default class CharactersList extends React.Component {

    state = { characters: [] }

    loadCharacters = (query) => {
        const searchQuery = query ? `?name=${query}` : ''

        fetch(`https://rickandmortyapi.com/api/character/${searchQuery}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ characters: data.results })
            })
    }

    handleDetailsClick = (character) => () => {
        this.props.history.push(`/characters/${character.id}`)
    }

    componentDidMount() {
        this.loadCharacters(this.props.location.search.split('=')[1])
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.location.search !== this.props.location.search) {
            this.loadCharacters(nextProps.location.search.split('=')[1])
        }
    }

    render() {
        return (
            <Grid container spacing={40}>
                {this.state.characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onDetailsClick={this.handleDetailsClick(character)}
                    />
                ))}
            </Grid>
        )
    }
}
