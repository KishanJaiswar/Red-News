import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'//importing class based components

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [title, setTitle] = useState(props.category)

    //to handle pageNo
    const updateNews = async () => {
        props.setProgress(10)//starting with 10 percentage of the screen
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd9fd0a81f4e4183bc3df6581b4c2931&page=${page}&pagesize=${props.pageSize}`//apikey
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(100)//after fetching full data from api it will become 100 percent 
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        document.title = `Red-News ${props.category}`
        updateNews();
    }, [])

    const handlePreviousClick = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

    return (
        < div className="container my-3 mx-6" >
            <div className="d-flex mb-3 my-2">
                <h2 className="me-auto p-0.5">Top Headlines {props.category}</h2>
                <button disabled={page <= 1}/* if page is on 1 then previous button is disabled */ type="button" className='btn btn-primary mx-2' onClick={handlePreviousClick/* we have to call this function through this. because we are in a class */}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / 8)} type="button" className='btn btn-primary' onClick={handleNextClick}>Next &rarr;</button>
            </div>
            {loading && <Loading />}
            
            <div className="row">
                {!loading && articles.map((element) => {
                    /*map() creates a new array from calling a function for every array element.
                      map() does not execute the function for empty elements.
                      map() does not change the original array.
                      console.log(element) - getting json of articles
                    */
                    return <div className="col-md-4" key={element.url/* because this is the main link */}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 200) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                    </div>
                })}
            </div>
        </div >
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    title: " "
}

export default News