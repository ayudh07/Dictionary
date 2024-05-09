import Navbar from "./components/navbar"
import TextField from "./components/textfield";
import {useState, useEffect} from 'react'
import { useDebouncedCallback } from 'use-debounce';
import Defination from "./components/defination";


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState('');
  // Define a debounced function for the API call
  const debouncedSearch = useDebouncedCallback(
    // API call function
    async (searchTerm) => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        const data = await response.json();
        setSearchData(data[0]); // Update the state with the response data
        console.log(data); // Handle response data accordingly
      } catch (error) {
        console.error('API call error:', error);
      }
    },
    // Debounce delay in milliseconds (e.g., 500ms)
    500
  );

  // Handle input change and trigger debounced API call
  const handleInputChange = (value) => {
    setSearchTerm(value);
    debouncedSearch(value); // Trigger debounced API call with the updated value
  };

  return (
    <div id='main'>
      <div className="container d-flex flex-column gap-5">
        <Navbar />
        <TextField valueCallback={(value)=>handleInputChange(value)}/>
        {searchData ? <Defination data={searchData} />: ''}
      </div>
    </div>
  )
}

export default App
