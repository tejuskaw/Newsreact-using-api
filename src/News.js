import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const News = () => {
  const [dataarr, changearr] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=Apple&from=2021-04-22&sortBy=popularity&apiKey=c086a63ca7e04482afd6c15adce4b3b8'
      )
      .then((f) => changearr(f.data.articles))
  }, [])
  console.log(dataarr)
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum,
      inventore illum eaque tempora cumque sint recusandae repellendus ducimus?
      Porro quibusdam odit officiis provident omnis aperiam tempora sit beatae
      sint. Porro fugiat amet eveniet maxime ad. Aut, enim a laudantium beatae
      est laboriosam? Dolorem voluptates molestiae a autem officia
      necessitatibus?
    </div>
  )
}

export default News
