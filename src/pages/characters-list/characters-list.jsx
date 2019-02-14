import React from "react"
import Grid from "@material-ui/core/Grid"
import { connect } from 'react-redux'

import { CharacterCard } from "./character-card"

class CharactersList extends React.Component {

    loadCharacters = (query) => {
        const searchQuery = query ? `?name=${query}` : ''

        fetch(`https://rickandmortyapi.com/api/character/${searchQuery}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.props.saveCharactersToStore(data.results)
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
        console.log('dataFromStore:', this.props.characters)
        return (
            <Grid container spacing={40}>
                {this.props.characters.map(character => (
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

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCharactersToStore: (characters) => dispatch({
            type: 'SAVE_CHARACTERS_TO_STORE',
            characters: characters
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
