import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import { CardDetail } from './components/CardDetail'
import { CardList } from './components/CardList'
import { CreateCard } from './components/CreateCard'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { MyCardList } from './components/MyCardList'
import { MyFriends } from './components/MyFriends'
import { NavBar } from './components/NavBar'
import { Register } from './components/Register'
import { TheirCardList } from './components/TheirCardList'


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
                                <Route 
                                    path="/" 
                                    element={ <CardList token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/register" 
                                    exact
                                    element={ <Register setAuth={setAuth} /> }
                                />
                                <Route 
                                    path="/card/:cardId"
                                    exact 
                                    element={ <CardDetail /> }
                                />
                                <Route 
                                    path="/friends"
                                    exact
                                    element={ <MyFriends token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/cards/username"
                                    exact
                                    element={ <TheirCardList token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/mycards" 
                                    exact
                                    element={ <MyCardList token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/theircards"
                                    exact
                                    element={ <TheirCardList token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                <Route 
                                    path="/create"
                                    exact
                                    element={ <CreateCard token={token} isLoggedIn={isLoggedIn} /> }
                                />
                                {/* <Route path="/cards/:user" element={ <LikedCardList token={token} isLoggedIn={isLoggedIn} /> } /> */}
                            </Routes>
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
