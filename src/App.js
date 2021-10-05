import dotenv from 'dotenv'

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// -- firebase
import firebase from 'firebase/compat/app'
import 'firebase/auth'

// --- component
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './contexts/context/UserContext'

import Header from './layout/Header'
import Footer from './layout/Footer'

import firebaseConfig from './Config/firebaseConfig'

//-- must at last
dotenv.config()
//init firebase
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='*' component={PageNotFound} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
