import React, { useState, useContext } from 'react'
import Axios from 'axios'

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'
// -- npm
import { Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/context/UserContext'
import { toast } from 'react-toastify'
// --- components
import UserCard from '../components/UserCard'
import Repos from '../components/Repos'

const Home = () => {
  const context = useContext(UserContext)
  const [query, setQuery] = useState('')
  const [user, setUser] = useState(null)

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`)
      setUser(data)
      console.log({ data })
    } catch (eror) {
      toast('Not able to locate user', { type: 'error' })
    }
  }

  // !todo --> FEAT :  MUST LOGIN
  if (!context.user?.uid) {
    toast('must be login ', { type: 'error' })
    return <Redirect to='/signin' />
  } else {
    toast('sucessfully login ', { type: 'success' })
  }
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home
