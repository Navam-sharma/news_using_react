import React, { useState } from 'react'
import axios from 'axios'
import News from './Components/News'
function App() {

  const [text, setText] = useState("business")
  const [news, setNews] = useState([])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const fetchNews = async () => {
    let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${text}&apiKey=6004b8fcb1604003b4ead57854e8d2c2`)
    console.log(response.data.articles);
    setNews(response.data.articles)
  }

  return (
    <>
      <h1 className='text-center my-2'>News App Using React JS</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-9">
            <input type="text" className='form-control' value={text} onChange={changeText} />
          </div>
          <div className="col-3">
            <button className='btn btn-primary' onClick={fetchNews}>Fetch News</button>
          </div>
        </div>
      </div>

      {
        news?.length > 0 ? (<News data={news} />) : (<h3 className='text-center'>No News</h3>)
      }
    </>
  )
}

export default App