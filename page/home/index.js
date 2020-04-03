import React, {useState} from 'react'

export default function(props) {
    const [state, setState] = useState({num: 0})
    return <div>
        <h2>{state.num}</h2>
        <button onClick={() => {setState({num: ++state.num})}}>+</button>
    </div>
}