import React from 'react'
import '/home/kaw/newswebsite/src/css/singlenews.css'
const SingleNews = ({ author, title, url, image, date, content }) => {
  return (
    <a className='overall' href={url} target='_blank'>
      <div className='card'>
        <div
          className='wrapper'
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundRepeat: 'round',
            objectFit: 'cover',
          }}
        >
          <div className='date'>
            <span className='day'>12</span>
            <span className='month'>Aug</span>
            <span className='year'>2016</span>
          </div>
          <div className='data'>
            <div className='content'>
              <span className='author'>{author}</span>
              <h1 className='title'>
                <div className='links'>{title}</div>
              </h1>
              <p className='text' style={{ color: 'blue' }}>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
export default SingleNews
