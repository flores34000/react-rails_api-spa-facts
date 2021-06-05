import Fact from './Fact'

function Facts(props) {

    const {facts} = props
  

    const renderFacts = () => {
        return facts.map(fact => <Fact key={fact.id} {...fact}/>)
    }
// console.log(facts);
    return (
        <div>

            <h1>facts here</h1>
            
            {renderFacts()}
        </div>
    )
}

export default Facts
