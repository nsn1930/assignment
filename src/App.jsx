import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Country from './Components/Country';
import Button from './Components/Button';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(res => {
            setPosts(res.data);
        })
    }, []);

  const smaller = () => {
    setPosts(posts.filter(p => p.area < 65300))
  }

  const oceania = () => {
    setPosts(posts.filter(p => p.region === 'Oceania'))
  }

  const reset = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
        <Button smaller={smaller} reset={reset} oceania={oceania}></Button>
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
