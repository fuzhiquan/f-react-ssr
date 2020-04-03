import React from 'react'
import {Link} from 'react-router-dom'

export default function(props) {
    return <React.Fragment>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
    </React.Fragment>
}