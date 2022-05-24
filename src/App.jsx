import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Country from './Components/Country';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(res => {
            setPosts(res.data);
            console.log(res.data)
        })
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        
          {
            posts.map((c, i) => <Country key={i} post={c}></Country>)
          }
               
      </header>
    </div>
  );
}

export default App;
