import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Fact from './Fact'
import FactForm from './FactForm'

function Facts(props) {

    const {facts} = props
  

    const renderFacts = () => {
        return facts.map(fact => <Fact key={fact.id} {...fact}/>)
    }
console.log(facts);
    return (
        <div>

            <h1>facts here</h1>
            
            {renderFacts()}
        </div>
    )
}

export default Facts
