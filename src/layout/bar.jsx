import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom'

import styles from './bar.css'
import { connect } from "react-redux"


class Bar extends React.PureComponent {

    state = { search: this.props.location.search.split('=')[1] || '' }

    onSearchChange = (event) => {
        const search = event.target.value
        this.setState({ search })
        this.props.history.replace(`?search=${search}`)
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar className={styles.toolbar}>
                    <Typography className={styles["toolbar-title"]} variant="h6" color="inherit" noWrap>
                        Rick and Morty characters {this.props.characters.length}
                    </Typography>

                    <Paper elevation={1} className={styles.search}>
                        <InputBase
                            className={styles["search-field"]}
                            placeholder="Search by character name"
                            value={this.state.search}
                            onChange={this.onSearchChange}
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(withRouter(Bar))
