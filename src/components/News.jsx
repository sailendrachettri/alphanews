import { NewsItem } from './NewsItem'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const News = (props) => {
    // STATE VARIABLES
    const [articles, setArticles] = useState([])
    // const [totalResults, setTotalResults] = useState(0)

    // FUNCTIONS
    const captializeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // handling API
    const updateNews = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fa152b462f164a19956f7bcf1edb3674"
        const data = await fetch(url);
        const parsedData = await data.json()

        setArticles(parsedData.articles)
        // setTotalResults(parsedData.totalResults)
        // console.log(parsedData);

    }
    useEffect(() => {
        document.title = `${props.category === 'general' ? "News Monkey - get the latest news for free" : captializeFirstLetter(props.category)} latest news - NewsMonkey`
        updateNews()
        // eslint-disable-next-line
    }, [])


    // constant and variables
    const defaultImage = "https://source.unsplash.com/random"

    return (
        <>
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                {
                    articles.map((element) => {
                        const { title, description, urlToImage, publishedAt, url, author, source } = element

                        return <Box key={Math.random()}>
                            <NewsItem title={title ? title.slice(0, 60) : "Not available"} description={description ? description.slice(0, 150) : "Not available"} img={!urlToImage ? defaultImage : urlToImage} newsUrl={url} author={author} publishedAt={publishedAt} newsSource={source.name} />
                        </Box>
                    })
                }
            </Grid>

        </>
    )
}
