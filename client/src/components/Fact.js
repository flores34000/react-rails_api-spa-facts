import React from 'react'

function Fact(props) {
    const {id,source,stars,text} = props
    return (
        <div className='fact-container'>
            <h1>id {id}: {text} </h1>
        </div>
    )
}

export default Fact
