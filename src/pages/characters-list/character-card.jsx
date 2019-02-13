import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './character-card.css'

export const CharacterCard = ({ character, onDetailsClick }) => (
    <Grid item sm={6} md={4} lg={3}>
        <Card className={styles.card}>
            <CardMedia
                className={styles.media}
                image={character.image}
                title="Avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {character.name}
                </Typography>
                <Typography>
                    Origin: {character.origin.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onDetailsClick}>
                    Details
                </Button>
            </CardActions>
        </Card>
    </Grid>
)
