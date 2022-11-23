import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { CardList } from './components/CardList'

function App() {
  const [token, setToken] = useLocalStorageState('token', null)
  const [username, setUsername] = useLocalStorageState('username', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = !!(username && token)



  return (
    <section className='App'>
      {isLoggedIn ? (
        <div>
          <Header setAuth={setAuth}/>
          <NavBar />
          <CardList />
        </div>
      ) : (
        <div>
          <Login setAuth={setAuth} isLoggedIn={isLoggedIn}/>
        </div>
      )}
    </section>
  )
}

export default App
