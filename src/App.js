import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './main.css'
import News from './News'
export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div className='main'>
          <Sidebar />
        </div>
        <div className='news'>
          <News />
        </div>
      </div>
    )
  }
}
