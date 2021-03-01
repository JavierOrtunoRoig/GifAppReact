import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ img: {title, ulr: url} }) => {


    return (
        <div className="card animate__animated animate__fadeInLeft ">
            <a  href={url}
                target="_blank" 
                rel="noreferrer">
                <img src={ url } alt={ title } />
            </a>
            <p> { title } </p>
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}

export default GifGridItem
