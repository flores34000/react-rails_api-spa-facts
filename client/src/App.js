
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import FactForm from './components/FactForm';
import Facts from './components/Facts';



function App() {

  const [facts, setFacts] = useState([])
  const [showForm, setShowForm] = useState(false)
  // console.log(showForm);

  useEffect(() => {
      getFacts()
  }, [])
    
  const getFacts = async() => {
      try {
          let res = await axios.get('/api/facts')
          setFacts(res.data)
          // console.log(res);
      }catch (err) {
          console.log(err);
          alert('error,check console')
      }
  }

  const renderPage = () => {
    
    return showForm ? <FactForm addFact={addFact} setShowForm={setShowForm}/> : <Facts facts={facts}/>
  } 
    
    
  const renderNavBar = () => {
    return showForm? <div onClick={()=>setShowForm(false)}>back to facts</div> : <div onClick={()=>setShowForm(true)}>new form</div>
  }

  // need a function to add Fact to DB then ui

  const addFact = async (factFromForm) => {
    try {
      let res = await axios.post('/api/facts', factFromForm)
      // res.data is going to be the newly created fact
      // how do add something to my facts
      setFacts( [...facts,res.data])
    } catch (err) {
     alert('error')
      console.log(err)
    }
  }

  return (
    <div className="App">
      {renderNavBar()}
      {renderPage()}
    </div>
  );
}
     
       

export default App;
