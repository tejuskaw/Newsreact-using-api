import React from 'react'
import { useState } from 'react'
import './css/sidebar.css'
const Sidebar = () => {
  const [Active, changeActive] = useState('home')
  return (
    <div className='side'>
      <h3 className='logo'>
        <i
          class='fab fa-neos'
          onClick={() => changeActive('home')}
          style={{ marginBottom: 0 }}
        ></i>
      </h3>

      <i
        onClick={() => changeActive('home')}
        className={'fas fa-home ' + (Active === 'home' ? 'active' : '')}
      ></i>
      <i
        onClick={() => changeActive('news')}
        className={'fal fa-newspaper ' + (Active === 'news' ? 'active' : '')}
      ></i>
      <i
        onClick={() => changeActive('save')}
        className={'far fa-save ' + (Active === 'save' ? 'active' : '')}
      ></i>
      <i
        onClick={() => changeActive('account')}
        className={
          'far fa-user-circle ' + (Active === 'account' ? 'active' : '')
        }
      ></i>
    </div>
  )
}

export default Sidebar
