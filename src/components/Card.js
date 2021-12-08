import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

import noImage from '../assets/noImage.jpg';




 function ArticleCard({oneCard}) {
    return (
        <Card  sx={{ maxWidth: 340, minWidth: 340}} >
            <CardActionArea>
                {oneCard ? <CardMedia
                    component="img"
                    height="300"
                    image={(oneCard.thumbnail) ? (oneCard.thumbnail.url) : noImage}
                    alt={oneCard.title}
                /> : <p>Brak zdjecia</p> }
                <CardContent>
                    <Typography  gutterBottom variant="h5" component="div">
                        {oneCard ? oneCard.title : <p>Brak</p>}
                    </Typography>
                    <Typography component="div" variant="body2" color="text.secondary">
                        {oneCard ? oneCard.description : <h1>Brak</h1>}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/page/${oneCard.title}`}>
                    <Button size="small" color="primary">
                        Read article
                    </Button>
                </Link>
            </CardActions>
        </Card>

    );

}

export default ArticleCard;

