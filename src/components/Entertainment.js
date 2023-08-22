import { NewsItem } from './NewsItem'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import data from './demoData.json'

export const Entertainment = (props) => {
    // STATE VARIABLES
    const [articles, setArticles] = useState([])

    // constant and variables
    const defaultImage = 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'
    const defaultDescription = "The description of this news is not availabe at the moment. But you can still read the news from homepage by clicking readmore icon."
    const defaultTitle = "The title of this news is not availabe at this moment. Please go to home page and read."

    // handling API
    const updateNews = async () => {
        const hostname = window.location.hostname

        if (hostname === "localhost") {
            // Below code works on development only with real news articles
            const entertainmentNews = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=fa152b462f164a19956f7bcf1edb3674"
            const data = await fetch(entertainmentNews);
            const parsedData = await data.json()
            setArticles(parsedData.articles)
        } else {
            // Below code works on production with samle news articles
            setArticles(data.articlesEntertainment) // this data is demo data from same directory
        }
    }
    useEffect(() => {
        document.title = "Entertainment  - Alpha News: get the latest news from all over the world"
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
