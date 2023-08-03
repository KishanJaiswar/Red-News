import React, { Component } from 'react'

const Loading = () => {
    return (
        <div className="position-absolute top-50 start-50 bottom-50 end-50">
            <div className="cssload-main">
                <span className="cssload-spinner"></span>
            </div>
        </div>
    )
}

export default Loading
