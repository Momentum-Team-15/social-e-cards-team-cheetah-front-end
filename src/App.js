import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import { CardDetail } from './components/CardDetail'
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { MyCardList } from './components/MyCardList'
import { MyFriends } from './components/MyFriends'
import { NavBar } from './components/NavBar'
import { Register } from './components/Register'
import { TheirCardList } from './components/TheirCardList'

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
        <section className='App'>
                {isLoggedIn ? (
                    <>
                        <div>
                            <Header setAuth={setAuth} />
                            <NavBar />
                            <Routes>
                                <Route path="/" element={ <CardList token={token} isLoggedIn={isLoggedIn} /> } />
                                <Route path="/register" exact element={ <Register /> } />
                                <Route path="/card/:cardId" element={ <CardDetail /> } />
                                <Route path="/friends" exact element={ <MyFriends token={token} isLoggedIn={isLoggedIn} /> } />
                                <Route path="/cards/username" element={ <TheirCardList token={token} isLoggedIn={isLoggedIn} /> } />
                                <Route path="/mycards" element={ <MyCardList token={token} isLoggedIn={isLoggedIn} /> } />
                                <Route path="/theircards" element={ <TheirCardList token={token} isLoggedIn={isLoggedIn} /> } />
                                {/* <Route path="/cards/:user" element={ <LikedCardList token={token} isLoggedIn={isLoggedIn} /> } /> */}
                                {/* how to set :user for mycards vs other users' cards */}
                                {/* confirm endpoints then create additional components as necessary (should just be dups of the cardLlist component with props to complete endpoint) */}
                            </Routes>
                        </div>
                        <div>
                            <CardList token={token} isLoggedIn={isLoggedIn} />
                        </div>
                    </>
                ) : (
                    <>
                        <header>
                        </header>
                        <section id="home-box">
                            <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
                        </section>
                    </>

                )}
            </section>
    )
}

export default App
