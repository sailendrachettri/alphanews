import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';

import { RWebShare } from 'react-web-share';

export const NewsItem = (props) => {
    // VARIABLES
    const getLogo = props.newsSource.charAt(0);

    // Date formatting - generated code using chatGPT
    const inputDate = props.publishedAt;
    const date = new Date(inputDate);

    // Formatting options
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    };
    // Formatting the date
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <>
            <Box padding={2}>
                <Card sx={{ maxWidth: 345, bgcolor: 'whitesmoke' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: grey[900] }} aria-label="news source">
                                {getLogo}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={props.newsSource}
                        subheader={formattedDate}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.img}
                        alt="alphanews"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <RWebShare

                                    data={{
                                        text: `News articles - "${props.newsSource}"`,
                                        url: props.newsUrl,
                                        title: props.title,
                                    }}>

                                    <ShareIcon />
                                </RWebShare>
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
