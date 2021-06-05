import React, { useState } from 'react'

function FactForm(props) {
    const {id,text: initText, userName: initUserName,source: initSource} = props
    const [text, setText] = useState(initText ? initText : '')
    const [userName, setUserName] = useState(initUserName ? initUserName: '' )
    const [source, setSource] = useState(initSource ? initSource : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({text,source,userName})
        if(id){
            console.log('update axios call here');
        }else{
            console.log('create a call');
        }
        
    }
    return (
        <div className="form-container">
            <h1>{id ? 'Edit' : 'New'}</h1>
            <form
            onSubmit={handleSubmit} >
                <p>Enter fact</p>
                <input type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}  />

                <p>Enter UserName</p>
                <input type="text"
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}  />

                 <p>Enter Source</p>
                <input type="text"
                value={source}
                onChange={(e)=> setSource(e.target.value)}  />
                
                <button>{id ? 'update' : 'create'}</button>
            </form>
        </div>
    )
}

export default FactForm
