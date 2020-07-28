import React from 'react'
import './App.css'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import { Chats } from './Chats'
import { ChatScreen } from './ChatScreen'

export default function App() {
    return (
        <div>
            {/* Navbar */}
            <Router>
                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/chat" />
                        <ChatScreen />
                    </Route>
                    <Route exact path="/chat">
                        <Header backButton="/" />
                        <Chats />
                    </Route>
                    <Route exact path="/">
                        <Header />
                        <TinderCards />
                        <SwipeButtons />
                    </Route>
                    <Route>
                    </Route>
                </Switch>


            </Router>
            {/* TinderCards */}
            {/* Buttons below Cards  */}
            {/* chats Screen */}
            {/* Individual chats screens */}
        </div>
    )
}
