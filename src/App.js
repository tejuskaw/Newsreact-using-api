import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './main.css'
import News from './News'
export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='main'>
          <Sidebar />
        </div>
        <div className='news'>
          <div
            style={{
              marginTop: '20px',
              marginLeft: '20px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontSize: '100px',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Roboto',
              }}
            >
              News
            </h1>
          </div>
          <News />
        </div>
      </div>
    )
  }
}
