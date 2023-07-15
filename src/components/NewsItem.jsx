import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';



export const NewsItem = (props) => {
    // VARIABLES
    const getLogo = props.newsSource.charAt(0);

    return (
        <>
            <Box padding={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {getLogo}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={props.newsSource}
                        subheader={props.publishedAt}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton aria-label='read more'>
                                <Link href={props.newsUrl} target="_blank" color='text.secondary'>
                                    <AutoStoriesTwoToneIcon />
                                </Link>
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
