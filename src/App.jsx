import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(res => {
            setPosts(res.data);
        })
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
