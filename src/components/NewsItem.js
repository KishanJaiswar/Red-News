import React from 'react'

const NewsItem = (props) => {
    let { imageUrl, title, description, newsUrl, author, date } = props;//destructuring
    return (
        <div className="my-1">
            <div className="card" >
                <img src={imageUrl == null ? "https://www.logolynx.com/images/logolynx/17/17734b4cb2272272f249b27930f598bc.jpeg" : imageUrl} className="card-img-top" alt="..." style={{ height: '13rem' }} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text" style={{ fontSize: '13px' }}>{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkown" : author} {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
