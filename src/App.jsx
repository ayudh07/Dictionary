import Navbar from "./components/navbar"
import TextField from "./components/textfield";
import {useState, useEffect} from 'react'
import { useDebounce } from "use-debounce";


function App() {
  const [searchItem, setSearchItem] = useState('');
  const [keyword] = useDebounce(searchItem, 1500);

  useEffect(() =>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
    .then((res) => {
       return res.json()
    }).then((data) => {
      console.log(data);
    })
  });

  return (
    <div id='main'>
      <div className="container d-flex flex-column gap-5">
        <Navbar />
        <TextField valueCallback={(value)=>setSearchItem(value)}/>
      </div>
    </div>
  )
}

export default App
