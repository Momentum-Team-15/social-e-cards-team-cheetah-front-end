import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { CardList } from './components/CardList'
import { MyCardList } from './components/MyCardList'
import { FriendsCardList } from './components/FriendsCardList'
import { CardDetail } from './components/CardDetail'

// import { LoggedOutHeader } from './components/LoggedOutHeader'

function App() {
    const [token, setToken] = useLocalStorageState('token', null)
    const [username, setUsername] = useLocalStorageState('username', '')
    
    const setAuth = (username, token) => {
        setToken(token)
        setUsername(username)
    }

    const isLoggedIn = !!(username && token)

    return (
        <BrowserRouter>
            <section className='App'>
                {isLoggedIn ? (
                    <>
                    <div>
                        <Header setAuth={setAuth} />
                        <NavBar />
                    </div>
                    <div className='card-shelf'>
                        <CardList />
                    </div>
                    </>
                ) : (
                    <>
                        <header>
                        </header>
                        <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
                        <h3>Or if you are first time visitor, please register.</h3>
                        <Register />
                    </>

                )}
            </section>
            <Routes>
                <Route path="/register" element={ <Register /> } />
                <Route path="/card/:cardId" element={ <CardDetail /> } />
                <Route path="/cards" element={ <CardList token={token} isLoggedIn={isLoggedIn} /> } />
                <Route path="/cards/:card" element={ <CardList token={token} isLoggedIn={isLoggedIn} /> } />
                <Route path="/mycards" element={ <MyCardList token={token} isLoggedIn={isLoggedIn} /> } />
                <Route path="/cards/friendscards" element={ <FriendsCardList token={token} isLoggedIn={isLoggedIn} /> } />
                {/* <Route path="/cards/:user" element={ <LikedCardList token={token} isLoggedIn={isLoggedIn} /> } /> */}
                {/* how to set :user for mycards vs other users' cards */}
                {/* confirm endpoints then create additional components as necessary (should just be dups of the cardLlist component with props to complete endpoint) */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
