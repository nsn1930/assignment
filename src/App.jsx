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
        <table>
          <thead>
            <th>Country name</th>
            <th>Area (km<span>&#178;</span>)</th>
            <th>Country region</th>
          </thead>
          <tbody>
          {
            posts.map((c, i) => <Country index={i} key={i} post={c}></Country>)
          }
          </tbody>
        </table>      
      </header>
    </div>
  );
}

export default App;
