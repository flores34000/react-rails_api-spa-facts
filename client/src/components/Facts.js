import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Facts() {

    useEffect(() => {
        getFacts()
    }, [])
      
    const getFacts = async() => {
        try {
            let res = await axios.get('/api/facts')
            console.log(res);
        }catch (err) {
            console.log(err);
            alert('error,check console')
        }
    }


    return (
        <div>
            <h1>facts here</h1>
        </div>
    )
}

export default Facts
