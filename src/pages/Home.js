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
      <Container>
        <Row className=' mt-3'>
          <Col md='5'>
            <InputGroup>
              <Input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Please provide the username'
              />
              <InputGroupAddon addonType='append'>
                <Button onClick={fetchDetails} color='primary'>
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>

            {/* component call + prop pass */}
            {user ? <UserCard user={user} /> : null}
          </Col>
          {/* component call + prop pass */}
          <Col md='7'>{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
