import React from 'react'
import './css/singlenews.css'
const SingleNews = ({ author, title, url, image, date, content }) => {
  const kya = date
  console.log(date.substring(5,7))
  const months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June', 'July' , 'August' , 'September' , 'October' , 'November' , 'December']

  return (
    <a className='overall' href={url} target='_blank' style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:"50px" , color:"black"}}>
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
            <span className='day'>{date.substring(8,10)}</span>
            <span className='month'>{months[parseInt(date.substring(5,7))]}</span>
            <span className='year'>{date.substr(0,4)}</span>
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
