import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { CardList } from './components/CardList'

function App() {
  const [login, setLogin] = useState(null)

  return (
    <section className='App'>
      {login ? (
        <div>
          <Header />
          <NavBar setLogin={setLogin} />
          <CardList />
        </div>
      ) : (
        <div>
          <Login setLogin={setLogin} />
        </div>
      )}
    </section>
  )
}

export default App
