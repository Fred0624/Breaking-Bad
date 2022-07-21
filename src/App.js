import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Search from './components/Search';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import SearchResult from './components/SearchResult';
import About from './components/About';


function App() {
  const [characters, setCharacters] = useState([])
  
  const[searchCharacter, setSearchCharacter] = useState([])
  // const[query, setQuery] = useState('')
  const [text, setText] = useState ('')

    const url = `https://www.breakingbadapi.com/api/characters`
    
    useEffect (() => {
    fetch(url)
    .then(res => 
      res.json()
    )
    .then(res => 
        setCharacters(res)
    )
    .catch((err) => {
        console.log(err)
    })
  },[])

  // const url1 = `https://www.breakingbadapi.com/api/characters?name=${query}`

    const handleChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        getInfo(text)
    }

    function getInfo() {
      const text = ''
      const url1 = `${url}&name=${text} `
      fetch(url1)
        .then(res => res.json())
        .then((res) => {
            setSearchCharacter(res)
            console.log(searchCharacter)
        })
        .catch((err) => 
            console.log(err)
        )
    }

    useEffect(() => {
        getInfo(text)
    },[])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters characters={characters} />} />
          <Route path='/characters/:char_id' element={<CharacterDetail />} />
          <Route path='/search' element={<Search handleChange={handleChange} handleSubmit={handleSubmit} text={text}/>} />
          <Route path='/search/:name' element={<SearchResult searchCharcter={searchCharacter} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
