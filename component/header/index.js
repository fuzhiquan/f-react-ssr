import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

export default function(props) {
    return <div className='header-container'>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
    </div>
}