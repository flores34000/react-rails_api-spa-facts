import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Fact from './Fact'
import FactForm from './FactForm'

function Facts() {

    const [facts, setFacts] = useState([])

    useEffect(() => {
        getFacts()
    }, [])
      
    const getFacts = async() => {
        try {
            let res = await axios.get('/api/facts')
            setFacts(res.data)
            console.log(res);
        }catch (err) {
            console.log(err);
            alert('error,check console')
        }
    }

    const renderFacts = () => {
        return facts.map(fact => <Fact key={fact.id} {...fact}/>)
    }
console.log(facts);
    return (
        <div>

            <h1>facts here</h1>
            <FactForm/>
            {renderFacts()}
        </div>
    )
}

export default Facts
