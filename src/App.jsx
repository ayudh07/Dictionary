import Navbar from "./components/navbar"
import TextField from "./components/textfield";
import {useState} from 'react'
import { useDebouncedCallback } from 'use-debounce';
import Defination from "./components/defination";


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState('');
  const [error, setError] = useState(false);
  // Define a debounced function for the API call
  const debouncedSearch = useDebouncedCallback(
    // API call function
    async (searchTerm) => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        console.log(response);
        if (response.ok){
          const data = await response.json();
          setSearchData(data[0]);
          setError(false); // Update the state with the response data
          console.log(data); // Handle response data accordingly
        }
        else{
          setError(true); // Update the state with the response data
          console.log(response);
          setSearchData(''); // Handle response data accordingly
        }
      } catch (error) {
        console.log('API call error:', error.status);
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
    <div id='main' className="d-flex flex-column align-items-center">
      <div className="app-box d-flex flex-column gap-5">
        <Navbar />
        <div className="d-flex flex-column gap-1">
          <TextField valueCallback={(value)=>{handleInputChange(value);setError(false);}} classes={error ? " error" : ''}/>
          {error ? <span className="error">Sorry,we couldnt find the word. Please check the spelling</span>: ''}
        </div>
        {searchData ? <Defination data={searchData} />: ''}
        
      </div>
    </div>
  )
}

export default App
