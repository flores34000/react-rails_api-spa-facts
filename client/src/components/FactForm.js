import React, { useState } from 'react'

function FactForm(props) {
    
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')
        console.log(text)
    }
    return (
        <>
            <form
            onSubmit={handleSubmit} >
                <p>enter fact</p>
                <input type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}  />
                <p></p>
                <button>submit</button>
            </form>
        </>
    )
}

export default FactForm
