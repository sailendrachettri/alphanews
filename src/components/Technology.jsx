import { NewsItem } from './NewsItem'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import data from './demoData.json'

export const Technology = (props) => {
    // STATE VARIABLES
    const [articles, setArticles] = useState([])

    // constant and variables
    const defaultImage = process.env.REACT_APP_DEFAULT_IMAGE_URL
    const defaultDescription = "The description of this news is not availabe at the moment. But you can still read the news from homepage by clicking readmore icon."
    const defaultTitle = "The title of this news is not availabe at this moment. Please go to home page and read."


    // handling API
    const updateNews = async () => {
        setArticles(data.articlesTechnology) // this data is demo data from same directory
    }
    useEffect(() => {
        document.title = "Technology - Alpha News: get the latest news from all over the world"
        updateNews()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Box minHeight='70vh'>
                <Grid container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {
                        articles.map((element) => {
                            const { title, description, urlToImage, publishedAt, url, author, source } = element

                            return <Box key={Math.random()}>
                                <NewsItem title={title ? title.slice(0, 87) : defaultTitle} description={(description !== null && description.length > 30) ? description.slice(0, 132) : defaultDescription} img={!urlToImage ? defaultImage : urlToImage} newsUrl={url} author={author} publishedAt={publishedAt} newsSource={!source.name ? "Unknown" : source.name} />
                            </Box>
                        })
                    }
                </Grid>
            </Box>

        </>
    )
}
