import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SingleNews from './SingleNews.js'
const News = () => {
  const [dataarr, changearr] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=Apple&from=2021-04-22&sortBy=popularity&apiKey=c086a63ca7e04482afd6c15adce4b3b8'
      )
      .then((f) => changearr(f['data']['articles']))
  }, [])
  console.log(dataarr)
  return (
    <div>
      {dataarr.map((e, index) => (
        <SingleNews
          key={index}
          author={e['author']}
          title={e['title']}
          url={e['url']}
          image={e['urlToImage']}
          date={e['description']}
          content={e['content']}
        />
      ))}
    </div>
  )
}

export default News
