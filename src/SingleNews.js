import React from 'react'
import './css/singlenews.css'
const SingleNews = ({ author, title, url, image, date, content }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div className='card'>
      <div
        href={url}
        target='_blank'
        rel='noreferrer'
        className='wrapper'
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundRepeat: 'round',
          objectFit: 'cover',
        }}
      >
        <div className='date'>
          <span className='day'>{date.substring(8, 10)}</span>
          <span className='month'>
            {months[parseInt(date.substring(5, 7))]}
          </span>
          <span className='year'>{date.substr(0, 4)}</span>
        </div>
        <div className='data'>
          <div className='content'>
            <span className='author' style={{ color: 'red' }}>
              {author}
            </span>
            <h1 className='title'>
              <a
                style={{ color: 'black' }}
                href={url}
                target='_blank'
                rel='noreferrer'
                className='links'
              >
                {title}
              </a>
            </h1>
            <p className='text' style={{ color: 'blue' }}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleNews
